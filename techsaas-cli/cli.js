import { promptUser } from './utils/promptUtils.js';
import {
  createComponent,
  createService,
  createStateManagementFiles,
  checkAndCreateBackendFiles,
  createController,
} from './generators';
import { ensureCorrectDirectory } from './utils/fileUtils.js';

const runCLI = async () => {
  const {
    backendEntryPoint,
    frontendEntryPoint,
    type,
    isBackend,
    names,
    targetDir,
    fileExtension,
    componentOptions,
  } = await promptUser();

  const nameList = names.split(',').map((name) => name.trim());

  if (type === 'Component') {
    for (const name of nameList) {
      await createComponent(
        name,
        targetDir,
        componentOptions,
        isBackend
      );
      if (componentOptions.autoRegister) {
        // Implement auto-registration logic if necessary
      }
      await checkAndCreateBackendFiles(name, isBackend);
    }
  } else if (type === 'Service') {
    const { serviceType } = componentOptions;
    for (const name of nameList) {
      await createService(
        name,
        targetDir,
        serviceType,
        fileExtension,
        isBackend
      );
      await createController(
        name,
        targetDir,
        fileExtension,
        isBackend
      );
    }
  } else if (type === 'State Management') {
    const { solution } = componentOptions;
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

// Run the CLI
runCLI();
