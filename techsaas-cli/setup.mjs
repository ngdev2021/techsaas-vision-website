import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import config from './setup-config.json' assert { type: 'json' };
import {
  createDirectory,
  createFile,
} from './src/utils/fileUtils.mjs';
import { log, error } from './src/utils/logger.mjs';
import { ENVIRONMENTS } from './src/constants/configConstants.mjs';

// Helper Function: Execute hooks dynamically
const executeHook = async (hookPath) => {
  try {
    const hookModule = await import(path.resolve(hookPath));
    if (typeof hookModule.default === 'function') {
      await hookModule.default();
      log(`Executed hook: ${hookPath}`);
    } else {
      error(`Hook ${hookPath} does not export a default function.`);
    }
  } catch (err) {
    error(`Failed to execute hook ${hookPath}: ${err.message}`);
  }
};

// Main Setup Function
const setup = async () => {
  try {
    // Prompt user for environment selection
    const { environment } = await inquirer.prompt({
      type: 'list',
      name: 'environment',
      message: 'Select the environment for setup:',
      choices: ENVIRONMENTS,
    });

    const envConfig = config[environment];

    // Create directories
    envConfig.directories.forEach((dir) => {
      const dirPath = typeof dir === 'object' ? dir.path : dir;
      if (dirPath) {
        createDirectory(dirPath);
      } else {
        error(`Invalid directory path: ${dir}`);
      }
    });

    // Create files
    envConfig.files.forEach((file) => {
      const filePath = file.path;
      if (filePath) {
        let content = file.content;

        // Apply replacements if any
        if (file.replacements) {
          for (const [key, value] of Object.entries(
            file.replacements
          )) {
            content = content.replace(
              new RegExp(`{{${key}}}`, 'g'),
              value
            );
          }
        }

        createFile(filePath, content);
      } else {
        error(`Invalid file path: ${file}`);
      }
    });

    // Run preSetup hook if it exists
    if (envConfig.hooks && envConfig.hooks.preSetup) {
      await executeHook(envConfig.hooks.preSetup);
    }

    // Run postSetup hook if it exists
    if (envConfig.hooks && envConfig.hooks.postSetup) {
      await executeHook(envConfig.hooks.postSetup);
    }

    log(`Setup completed for ${environment} environment.`);
  } catch (err) {
    error('Error during setup:', err.message);
  }
};

// Run the setup
setup();
