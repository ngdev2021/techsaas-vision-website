
# Modularized CLI Documentation

This documentation provides an in-depth overview of the modularized CLI, which automates the creation of components, services, state management files, and more for your project. The CLI is designed with flexibility, maintainability, and scalability in mind, and it follows a modular structure to allow for easy extension and customization.

---

## Table of Contents
1. Overview
2. Architecture
3. CLI Flow
4. Core Modules
   - Prompt Utilities (`promptUtils.mjs`)
   - File Utilities (`fileUtils.mjs`)
   - Generator Functions
     - Component Generator
     - Service Generator
     - State Management Generator
     - Controller Generator
   - Error Handling
5. Configuration
   - Setup Configuration (`setup-config.json`)
   - Constants
6. Hooks
7. Running the CLI
8. Extending the CLI
9. Conclusion

---

## Overview

The CLI is a command-line tool that automates file generation and setup tasks for your project. It prompts the user for input, processes the input, and generates the required files and directories based on the chosen environment and settings. The CLI supports generating components, services, state management files, controllers, and more.

The modular design allows for easy extension and maintenance, enabling you to add new features or modify existing ones without affecting the overall structure.

---

## Architecture

The CLI is organized into the following core modules:

1. Prompt Utilities: Handles user input and prompts.
2. File Utilities: Handles file and directory creation and manipulation.
3. Generator Functions: Generates the required files and directories based on user input.
4. Error Handling: Provides centralized error logging and handling.

Each of these modules is designed to be independent, ensuring that changes in one module don't affect the others.

---

## CLI Flow

1. **User Input:** The CLI starts by prompting the user for input, such as the type of file to create (component, service, etc.) and the environment (development, production, etc.).
2. **Processing Input:** Based on the input, the CLI determines which generator functions to call and how to structure the files and directories.
3. **File and Directory Creation:** The CLI creates the necessary files and directories, applying any templates and configurations as needed.
4. **Hooks Execution:** Before and after setup tasks are run via hooks, allowing for additional customization.
5. **Completion:** The CLI completes the setup and logs the success or any errors encountered.

---

## Core Modules

### Prompt Utilities

File: `src/utils/promptUtils.mjs`

This module handles all user prompts and input collection. It uses `inquirer` to prompt the user for the type of file to create, the environment, the names of the files, and other necessary details.

Functions:
- `promptUser()`: Prompts the user for the required information and returns the input.

---

### File Utilities

File: `src/utils/fileUtils.mjs`

This module provides helper functions for creating files and directories, ensuring that they don't overwrite existing ones.

Functions:
- `createDirectory(dirPath)`: Creates a directory if it doesn't exist.
- `createFile(filePath, content)`: Creates a file with the specified content if it doesn't exist.
- `ensureCorrectDirectory(targetPath, isBackend)`: Ensures the correct directory structure for frontend and backend files.

---

### Generator Functions

This module contains the core functions responsible for generating different types of files. Each generator is designed to handle a specific task.

#### Component Generator

File: `src/generators/componentGenerator.js`

This function generates React components, along with optional styles, tests, and Storybook files.

Functions:
- `createComponent(name, targetDir, options, isBackend)`: Creates a new component directory and files based on the options provided.

#### Service Generator

File: `src/generators/serviceGenerator.js`

This function generates service files, such as REST or GraphQL services.

Functions:
- `createService(name, targetDir, serviceType, fileExtension, isBackend)`: Creates a service file and a test file for the service.

#### State Management Generator

File: `src/generators/stateManagementGenerator.js`

This function generates state management files, such as Context, Redux, or Redux Toolkit setups.

Functions:
- `createStateManagementFiles(solution, targetDir, fileExtension)`: Generates the appropriate state management files based on the chosen solution.

#### Controller Generator

File: `src/generators/backendGenerator.js`

This function generates controller files for backend services.

Functions:
- `createController(name, targetDir, fileExtension, isBackend)`: Creates a controller file for backend routes.

---

### Error Handling

File: `src/errorHandling/errorHandling.mjs`

This module provides centralized error handling and logging functionality.

Functions:
- `handleError(error)`: Logs and handles errors in a standardized way.

---

## Configuration

### Setup Configuration

File: `setup-config.json`

This JSON file defines the setup configurations for different environments (default, development, production, staging, custom). It specifies the directories, files, and hooks to be used during the setup.

---

### Constants

File: `src/constants/configConstants.mjs`

This file contains constants used throughout the CLI, such as environment names.

Constants:
- `ENVIRONMENTS`: An array of environment names used in the prompt.

---

## Hooks

Hooks allow you to run custom scripts before or after the setup process. These are defined in the setup configuration and executed dynamically during the setup.

Pre-Setup Hook: Runs before the main setup tasks.
Post-Setup Hook: Runs after the main setup tasks.

---

## Running the CLI

To run the CLI, simply execute the `setup.mjs` file using Node.js:

```bash
node setup.mjs
```

You will be prompted to select the environment and specify other options based on the type of file you want to create. The CLI will handle the rest, generating files and directories as needed.

---

## Extending the CLI

To extend the CLI, you can add new generator functions, modify the existing configuration, or create new hooks. The modular structure ensures that these changes can be made without disrupting the core functionality.

- **Adding a New Generator:** Create a new generator function in the `generators` directory and update the CLI to call this function based on user input.
- **Modifying Configuration:** Update the `setup-config.json` file to add new directories, files, or hooks.
- **Adding Hooks:** Create new hook scripts in the `scripts` directory and reference them in the configuration.

---

## Conclusion

The modularized CLI provides a flexible and maintainable solution for automating file generation and setup tasks. By following best practices for modularity and separation of concerns, the CLI can be easily extended and customized to fit your project's needs.

This documentation should serve as a comprehensive guide to understanding, using, and extending the CLI. If you have any further questions or need additional functionality, feel free to explore the codebase or add new features as needed!
