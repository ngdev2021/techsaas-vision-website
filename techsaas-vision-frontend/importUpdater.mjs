import { promises as fs } from 'fs';
import path from 'path';
import ProgressBar from 'progress';
import { execSync } from 'child_process';
import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from 'worker_threads';
import { createPatch } from 'diff';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let fileLocationMap = {}; // Store file locations
let importCache = {};

const config = {
  dryRun: false,
  autoCommit: true,
  commitMessage: 'Automated import path updates',
  showProgressBar: true,
  verboseLogging: false,
  aiSuggestionsEnabled: true,
  groupImports: true,
  backupEnabled: true,
  removeUnusedImports: true,
  optimizeImportPaths: true,
  refactorCode: true,
  preProcessingHook: null,
  postProcessingHook: null,
  maxDepth: 100,
};

function parseArguments() {
  const args = process.argv.slice(2);
  args.forEach((arg) => {
    if (arg.startsWith('--')) {
      const [key, value] = arg.split('=');
      const configKey = key.replace('--', '');
      if (config.hasOwnProperty(configKey)) {
        config[configKey] =
          value === 'true' ? true : value === 'false' ? false : value;
      }
    }
  });
}

function createProgressBar(total) {
  return new ProgressBar('Processing files [:bar] :percent :etas', {
    total,
    width: 30,
    complete: '=',
    incomplete: ' ',
  });
}

function groupImports(content) {
  if (!content) {
    console.warn(
      'Content is null or undefined. Skipping import grouping.'
    );
    return content;
  }

  const importStatements = content.match(/import\s.+?;/g);
  if (!importStatements) return content;

  const groupedImports = importStatements.sort((a, b) => {
    const aPath = a.match(/from\s+['"](.+?)['"]/);
    const bPath = b.match(/from\s+['"](.+?)['"]/);
    return aPath && bPath ? aPath[1].localeCompare(bPath[1]) : 0;
  });

  const nonImportContent = content
    .replace(/import\s.+?;/g, '')
    .trim();
  return `${groupedImports.join('\n')}\n\n${nonImportContent}`;
}

function applyAISuggestions(content) {
  if (!content) {
    console.warn(
      'Content is null or undefined. Skipping AI suggestions.'
    );
    return content;
  }

  if (config.aiSuggestionsEnabled) {
    console.log('Applying heuristic AI-powered suggestions...');

    if (config.removeUnusedImports)
      content = removeUnusedImports(content);
    if (config.optimizeImportPaths)
      content = optimizeImportPaths(content);
    if (config.refactorCode) content = refactorCode(content);
  }

  return content;
}

function removeUnusedImports(content) {
  const importStatements = content.match(/import\s.+?;/g);
  if (!importStatements) return content;

  importStatements.forEach((importStatement) => {
    const importedModuleMatch = importStatement.match(
      /import\s+(.+?)\s+from/
    );
    if (importedModuleMatch) {
      const importedModule = importedModuleMatch[1]
        .trim()
        .replace(/[{}]/g, '');
      const regex = new RegExp(`\\b${importedModule}\\b`, 'g');
      const contentWithoutImport = content.replace(
        importStatement,
        ''
      );
      if (!regex.test(contentWithoutImport)) {
        content = content.replace(importStatement, '');
      }
    }
  });
  return content;
}

function optimizeImportPaths(content) {
  return content.replace(/(\.\.\/)+src\//g, '/src/');
}

function refactorCode(content) {
  content = content.replace(/\bvar\b/g, 'let');
  content = content.replace(
    /function\s*\(([^)]*)\)\s*\{([^}]*)\}/g,
    '($1) => {$2}'
  );
  content = content.replace(
    /'([^']*)'\s*\+\s*([^+]+)\s*\+\s*'([^']*)'/g,
    '`$1${$2}$3`'
  );
  content = content.replace(
    /for\s*\((let|var|const)\s+(.+?)\s+in\s+(.+?)\)\s*\{/g,
    '$3.forEach(($2) => {'
  );
  return content;
}

async function deleteEmptyDirectories(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory()
        ? deleteEmptyDirectories(fullPath)
        : fullPath;
    })
  );

  const filteredFiles = files.filter(Boolean);

  if (filteredFiles.length === 0) {
    try {
      await fs.rmdir(dir);
      console.log(`Deleted empty directory: ${dir}`);
    } catch (error) {
      console.error(
        `Error deleting directory ${dir}: ${error.message}`
      );
    }
  }

  return filteredFiles.length > 0 ? dir : null;
}

async function traverseAndMapFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        await traverseAndMapFiles(fullPath);
      } else if (stat.isFile()) {
        fileLocationMap[fullPath] = fullPath;
      }
    })
  );
}

function resolveImportPath(importPath, currentFile) {
  if (importPath.startsWith('.') || importPath.startsWith('/')) {
    const resolvedPath = path.resolve(
      path.dirname(currentFile),
      importPath
    );
    return (
      Object.values(fileLocationMap).find((file) =>
        file.includes(resolvedPath)
      ) || importPath
    );
  }
  return importPath;
}

async function updateImportsWithAISuggestions(files) {
  const backupFiles = {};
  const errors = [];
  const progressBar = config.showProgressBar
    ? createProgressBar(files.length)
    : null;

  for (const file of files) {
    try {
      const originalContent = await fs.readFile(file, 'utf8');
      let updatedContent = originalContent;

      const importStatements = originalContent.match(
        /import\s+.*?from\s+['"](.+?)['"]/g
      );
      if (importStatements) {
        importStatements.forEach((importStatement) => {
          const importPathMatch = importStatement.match(
            /from\s+['"](.+?)['"]/
          );
          if (importPathMatch) {
            const importPath = importPathMatch[1];
            if (
              !importPath.startsWith('.') &&
              !importPath.startsWith('/')
            ) {
              return; // Skip node module imports
            }
            const resolvedPath = resolveImportPath(importPath, file);
            updatedContent = updatedContent.replace(
              importPath,
              resolvedPath
            );
          }
        });
      }

      updatedContent = applyAISuggestions(updatedContent);

      if (config.groupImports && updatedContent) {
        updatedContent = groupImports(updatedContent);
      }

      if (updatedContent && updatedContent !== originalContent) {
        if (config.backupEnabled) {
          const backupPath = `${file}.bak`;
          await fs.writeFile(backupPath, originalContent, 'utf8');
          backupFiles[file] = backupPath;
        }

        if (!config.dryRun) {
          await fs.writeFile(file, updatedContent, 'utf8');
        }

        logChanges(file, originalContent, updatedContent);
      }
    } catch (error) {
      console.error(`Error updating file ${file}: ${error.message}`);
      errors.push(handleFileUpdateError(file, error));
    }

    if (progressBar) progressBar.tick();
  }

  if (errors.length > 0) {
    for (const [file, backupPath] of Object.entries(backupFiles)) {
      await fs.copyFile(backupPath, file);
    }
  }

  if (config.autoCommit && !config.dryRun && errors.length === 0) {
    try {
      execSync(
        `git add . && git commit -m "${config.commitMessage}"`
      );
    } catch (error) {
      console.error('Failed to commit changes:', error.message);
    }
  }
}

function processFilesInParallel(files) {
  const workerCount = Math.min(files.length, 4);
  const workers = [];

  for (let i = 0; i < workerCount; i++) {
    const worker = new Worker(__filename, {
      workerData: {
        files: files.slice(
          (i * files.length) / workerCount,
          ((i + 1) * files.length) / workerCount
        ),
      },
    });
    workers.push(worker);
  }

  return Promise.all(
    workers.map(
      (worker) =>
        new Promise((resolve, reject) => {
          worker.on('message', resolve);
          worker.on('error', reject);
        })
    )
  );
}

function logChanges(file, originalContent, updatedContent) {
  if (config.verboseLogging) {
    console.log(`Changes applied to ${file}:`);
    console.log(createPatch(file, originalContent, updatedContent));
  }
}

function handleFileUpdateError(file, error) {
  console.error(`Error updating file ${file}: ${error.message}`);
  if (config.verboseLogging) console.error(error.stack);
  return { file, error: error.message };
}

function runPreProcessingHook() {
  if (config.preProcessingHook) {
    execSync(config.preProcessingHook, { stdio: 'inherit' });
  }
}

function runPostProcessingHook() {
  if (config.postProcessingHook) {
    execSync(config.postProcessingHook, { stdio: 'inherit' });
  }
}

async function main() {
  parseArguments();
  runPreProcessingHook();

  await deleteEmptyDirectories('src'); // Delete empty directories first

  await traverseAndMapFiles('src'); // Traverse and map all file locations

  const filesToProcess = Object.keys(fileLocationMap); // Get all files from the map

  await processFilesInParallel(filesToProcess);

  runPostProcessingHook();
}

if (isMainThread) {
  main().catch(console.error);
} else {
  const { files } = workerData;

  (async () => {
    for (const file of files) {
      try {
        const originalContent = await fs.readFile(file, 'utf8');
        let updatedContent = originalContent;

        const importStatements = originalContent.match(
          /import\s+.*?from\s+['"](.+?)['"]/g
        );
        if (importStatements) {
          importStatements.forEach((importStatement) => {
            const importPathMatch = importStatement.match(
              /from\s+['"](.+?)['"]/
            );
            if (importPathMatch) {
              const importPath = importPathMatch[1];
              if (
                !importPath.startsWith('.') &&
                !importPath.startsWith('/')
              ) {
                return; // Skip node module imports
              }
              const resolvedPath = resolveImportPath(
                importPath,
                file
              );
              updatedContent = updatedContent.replace(
                importPath,
                resolvedPath
              );
            }
          });
        }

        updatedContent = applyAISuggestions(updatedContent);

        if (config.groupImports && updatedContent) {
          updatedContent = groupImports(updatedContent);
        }

        if (updatedContent && updatedContent !== originalContent) {
          await fs.writeFile(file, updatedContent, 'utf8');
        }
      } catch (error) {
        console.error(
          `Error updating file ${file}: ${error.message}`
        );
      }
    }
    parentPort.postMessage('done');
  })();
}
