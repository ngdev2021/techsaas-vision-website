import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

// Helper Function: Create directories and files if they don't exist
const createFileWithDirCheck = (filePath, content) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
};

// Helper Function: Ensure correct directory (frontend or backend)
const ensureCorrectDirectory = (targetPath, isBackend = false) => {
  const baseDir = isBackend
    ? 'techsaas-vision-backend'
    : 'techsaas-vision-frontend';
  const srcPath = path.join(process.cwd(), baseDir, 'src');
  if (!fs.existsSync(srcPath)) {
    throw new Error(
      `src directory not found in ${baseDir}. Ensure you're in the correct project directory.`
    );
  }
  return targetPath.startsWith(srcPath)
    ? targetPath
    : path.join(srcPath, targetPath);
};

// Helper Function: Load custom templates from config
const loadCustomTemplate = (templateType, componentName) => {
  const configPath = path.join(process.cwd(), 'template-config.json');
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath));
    if (config[templateType] && config[templateType][componentName]) {
      return fs.readFileSync(
        config[templateType][componentName],
        'utf8'
      );
    }
  }
  return null;
};

// Core Function: Create state management files
const createStateManagementFiles = (
  solution,
  targetDir,
  fileExtension
) => {
  const finalDir = ensureCorrectDirectory(targetDir);
  const stateManagementTemplates = {
    context: {
      contextFile:
        loadCustomTemplate('context', 'Context') ||
        `import React, { createContext, useReducer } from 'react';
const initialState = {};
const Context = createContext(initialState);
const reducer = (state, action) => { switch (action.type) { default: return state; }};
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
export default Context;`,
      usageExample: `import React, { useContext } from 'react';
import Context from './Context';
const ExampleComponent = () => {
  const { state, dispatch } = useContext(Context);
  return <div><p>State: {JSON.stringify(state)}</p></div>;
};
export default ExampleComponent;`,
    },
    // Add redux and reduxToolkit templates
  };

  if (solution === 'context') {
    createFileWithDirCheck(
      path.join(finalDir, `Context.${fileExtension}`),
      stateManagementTemplates.context.contextFile
    );
    createFileWithDirCheck(
      path.join(finalDir, `ExampleComponent.${fileExtension}`),
      stateManagementTemplates.context.usageExample
    );
  } else if (solution === 'redux' || solution === 'reduxToolkit') {
    // Add redux/reduxToolkit logic
  }

  console.log(
    `${solution} state management setup created at ${finalDir}`
  );
};

// Core Function: Create components with custom templates, Storybook, and testing
const createComponent = (name, targetDir, options, isBackend) => {
  // Create a new directory for the component
  const componentDir = path.join(
    ensureCorrectDirectory(targetDir, isBackend),
    name
  );

  let componentContent = loadCustomTemplate('component', name);

  if (!componentContent) {
    componentContent =
      options.templateType === 'functional'
        ? `import React from 'react'; const ${name} = () => <div><h2>${name} Component (${options.componentType})</h2></div>; export default ${name};`
        : `import React, { Component } from 'react'; class ${name} extends Component { render() { return <div><h2>${name} Component (${options.componentType})</h2></div>; }} export default ${name};`;
  }

  createFileWithDirCheck(
    path.join(componentDir, `${name}.${options.fileExtension}`),
    componentContent
  );
  if (options.styleType !== 'none') {
    createFileWithDirCheck(
      path.join(componentDir, `${name}.${options.styleType}`),
      `.${name.toLowerCase()} { /* Styles */ }`
    );
  }
  if (options.testFramework !== 'none') {
    createFileWithDirCheck(
      path.join(
        componentDir,
        `${name}.test.${options.fileExtension}`
      ),
      `import React from 'react'; import { render } from '@testing-library/react'; import ${name} from './${name}'; test('renders ${name}', () => { render(<${name} />); });`
    );
  }
  if (options.includeStorybook) {
    createFileWithDirCheck(
      path.join(
        componentDir,
        `${name}.stories.${options.fileExtension}`
      ),
      `import React from 'react'; import ${name} from './${name}'; export default { title: '${name}', component: ${name} }; export const Default = () => <${name} />;`
    );
  }

  console.log(
    `${options.componentType} component ${name} created at ${componentDir}`
  );
};

// Core Function: Create services (REST/GraphQL)
const createService = (
  name,
  targetDir,
  serviceType,
  fileExtension,
  isBackend
) => {
  // Place services in the appropriate backend folder
  const serviceDir = path.join(
    ensureCorrectDirectory(targetDir, isBackend),
    'services'
  );

  const serviceTemplate =
    serviceType === 'rest'
      ? `import axios from 'axios'; export const ${name} = async (endpoint, options = {}) => { try { const response = await axios(endpoint, options); return response.data; } catch (error) { throw error; }};`
      : `import { gql } from 'apollo-boost'; import { useQuery } from '@apollo/react-hooks'; export const ${name} = (query, variables) => { const { loading, error, data } = useQuery(gql\`\${query}\`, { variables }); return { loading, error, data }; };`;

  createFileWithDirCheck(
    path.join(serviceDir, `${name}.${fileExtension}`),
    serviceTemplate
  );
  createFileWithDirCheck(
    path.join(serviceDir, `${name}.test.${fileExtension}`),
    `import { ${name} } from './${name}'; test('fetches data from ${name} service', async () => { /* Test logic */ });`
  );
  console.log(`Service ${name} created at ${serviceDir}`);
};

// Core Function: Create controllers
const createController = (
  name,
  targetDir,
  fileExtension,
  isBackend
) => {
  // Place controllers in the appropriate backend folder
  const controllerDir = path.join(
    ensureCorrectDirectory(targetDir, isBackend),
    'controllers'
  );

  const controllerTemplate = `// ${name} Controller
module.exports = {
  // Define controller functions here
  exampleFunction: (req, res) => {
    // Logic here
    res.send('${name} controller response');
  }
};`;

  createFileWithDirCheck(
    path.join(controllerDir, `${name}.${fileExtension}`),
    controllerTemplate
  );
  console.log(`Controller ${name} created at ${controllerDir}`);
};

// Core Function: Check backend dependencies based on frontend components
const checkAndCreateBackendFiles = async (
  frontendComponentName,
  isBackend
) => {
  const frontendToBackendMapping = {
    Login: [
      'models/authModel',
      'services/authService',
      'controllers/authController',
      'routes/authRoute',
    ],
    Register: [
      'models/userModel',
      'services/userService',
      'controllers/userController',
      'routes/userRoute',
    ],
  };

  if (!isBackend && frontendToBackendMapping[frontendComponentName]) {
    const missingBackendFiles = frontendToBackendMapping[
      frontendComponentName
    ].filter(
      (backendFile) =>
        !fs.existsSync(
          path.join(
            process.cwd(),
            'techsaas-vision-backend',
            'src',
            backendFile + '.js'
          )
        )
    );

    if (missingBackendFiles.length > 0) {
      const { createBackendFiles } = await inquirer.prompt({
        type: 'confirm',
        name: 'createBackendFiles',
        message: `The following backend files are missing: ${missingBackendFiles.join(
          ', '
        )}. Create them now?`,
        default: true,
      });

      if (createBackendFiles) {
        missingBackendFiles.forEach((backendFile) => {
          const backendFilePath = path.join(
            process.cwd(),
            'techsaas-vision-backend',
            'src',
            backendFile + '.js'
          );
          const backendTemplates = {
            'models/authModel': `const mongoose = require('mongoose'); const authSchema = new mongoose.Schema({ /* Schema */ }); module.exports = mongoose.model('Auth', authSchema);`,
            'services/authService': `module.exports = { /* Auth services */ };`,
            'controllers/authController': `// Auth Controller\nmodule.exports = { /* Auth controller logic */ };`,
            'routes/authRoute': `const express = require('express'); const router = express.Router(); /* Routes */ module.exports = router;`,
            // Add more templates...
          };
          createFileWithDirCheck(
            backendFilePath,
            backendTemplates[backendFile]
          );
          console.log(
            `Backend file ${backendFile} created at ${backendFilePath}`
          );
        });
      }
    }
  }
};

// Core Function: Prompt user for input and generate files
const promptUser = async () => {
  const { type } = await inquirer.prompt({
    type: 'list',
    name: 'type',
    message: 'What would you like to create?',
    choices: [
      'Component',
      'Service',
      'State Management',
      'Auth Scaffolding',
      'Pipeline Setup',
    ],
  });
  const { isBackend } = await inquirer.prompt({
    type: 'confirm',
    name: 'isBackend',
    message: 'Is this for the backend?',
    default: false,
  });
  const { names } = await inquirer.prompt({
    type: 'input',
    name: 'names',
    message: `Enter the ${type.toLowerCase()} names (comma-separated):`,
  });
  const { targetDir } = await inquirer.prompt({
    type: 'input',
    name: 'targetDir',
    message: `Enter the target directory inside src:`,
    default: 'components',
  });
  const { fileExtension } = await inquirer.prompt({
    type: 'input',
    name: 'fileExtension',
    message: `Enter the file extension (default is "js"):`,
    default: 'js',
  });

  const nameList = names.split(',').map((name) => name.trim());

  if (type === 'Component') {
    const {
      templateType,
      styleType,
      testFramework,
      includeStorybook,
      autoRegister,
      componentType,
    } = await inquirer.prompt([
      {
        type: 'list',
        name: 'templateType',
        message: 'Select the component template type:',
        choices: ['functional', 'classBased'],
      },
      {
        type: 'list',
        name: 'styleType',
        message: 'Select the styling type:',
        choices: ['css', 'scss', 'styled-components'],
      },
      {
        type: 'list',
        name: 'testFramework',
        message: 'Select the testing framework:',
        choices: ['jest', 'mocha', 'none'],
      },
      {
        type: 'confirm',
        name: 'includeStorybook',
        message: 'Include Storybook stories?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'autoRegister',
        message: 'Auto-register components in an index.js file?',
        default: true,
      },
      {
        type: 'list',
        name: 'componentType',
        message:
          'Is this a custom, reusable, or other type of component?',
        choices: ['custom', 'reusable', 'other'],
      },
    ]);

    for (const name of nameList) {
      await createComponent(
        name,
        targetDir,
        {
          templateType,
          styleType,
          testFramework,
          includeStorybook,
          fileExtension,
          componentType,
        },
        isBackend
      );
      if (autoRegister) {
        // Implement auto-registration logic
      }
      await checkAndCreateBackendFiles(name, isBackend);
    }
  } else if (type === 'Service') {
    const { serviceType } = await inquirer.prompt({
      type: 'list',
      name: 'serviceType',
      message: 'Select the service type:',
      choices: ['rest', 'graphql'],
    });
    for (const name of nameList) {
      await createService(
        name,
        targetDir,
        serviceType,
        fileExtension,
        isBackend
      );
      // Optionally create controllers for services
      await createController(
        name,
        targetDir,
        fileExtension,
        isBackend
      );
    }
  } else if (type === 'State Management') {
    const { solution } = await inquirer.prompt({
      type: 'list',
      name: 'solution',
      message: 'Select the state management solution:',
      choices: ['context', 'redux', 'reduxToolkit'],
    });
    await createStateManagementFiles(
      solution,
      targetDir,
      fileExtension
    );
  } else if (type === 'Auth Scaffolding') {
    // Implement Auth Scaffolding logic
  } else if (type === 'Pipeline Setup') {
    // Implement Pipeline Setup logic
  }

  console.log(`${type}s created successfully.`);
};

// Run the prompt
promptUser();
