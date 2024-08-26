import {
  createFileWithDirCheck,
  ensureCorrectDirectory,
} from '../utils/fileUtils.js';

export const createController = async (
  name,
  targetDir,
  fileExtension,
  isBackend
) => {
  const controllerDir = path.join(
    ensureCorrectDirectory(targetDir, isBackend),
    'controllers'
  );

  const controllerTemplate = `// ${name} Controller\nmodule.exports = { /* ${name} controller logic */ };`;

  createFileWithDirCheck(
    path.join(controllerDir, `${name}Controller.${fileExtension}`),
    controllerTemplate
  );
};

// Similar logic for models, routes, etc.
