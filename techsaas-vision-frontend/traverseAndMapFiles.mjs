import { promises as fs } from 'fs';
import path from 'path';

// Change this to the appropriate directory path
const directory = path.resolve('.', 'src');

// Object to store file paths
const fileMap = {};

async function traverseAndMapFiles(dir) {
  console.log(`Traversing directory: ${dir}`);

  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      console.log(`Entering directory: ${fullPath}`);
      await traverseAndMapFiles(fullPath); // Recursively traverse subdirectories
    } else if (entry.isFile()) {
      console.log(`Mapping file: ${fullPath}`);
      fileMap[entry.name] = fullPath; // Store the file name and its full path
    }
  }
}

async function updateImports() {
  console.log('Starting import updates...');

  for (const [fileName, filePath] of Object.entries(fileMap)) {
    console.log(`Processing file: ${fileName} at ${filePath}`);

    let content;
    try {
      content = await fs.readFile(filePath, 'utf8');
    } catch (err) {
      console.error(`Error reading file ${filePath}: ${err.message}`);
      continue;
    }

    // Check if the file contains missing imports
    const missingImports = content.match(
      /'useState'|\'useEffect\'|\'useThemeSettings\'|Icons/g
    );

    if (missingImports) {
      console.log(`Missing imports found in file: ${filePath}`);
      // Add missing imports at the top of the file
      let newContent = `import { useState, useEffect } from 'react';\n${content}`;

      try {
        await fs.writeFile(filePath, newContent, 'utf8');
        console.log(`Updated imports for file: ${filePath}`);
      } catch (err) {
        console.error(
          `Error writing to file ${filePath}: ${err.message}`
        );
      }
    }
  }
}

async function run() {
  console.log('Starting directory traversal...');
  await traverseAndMapFiles(directory);
  console.log('File mapping complete:', fileMap);

  console.log('Updating imports...');
  await updateImports();
  console.log('Import updates complete.');
}

run().catch((err) =>
  console.error(`Error during execution: ${err.message}`)
);
