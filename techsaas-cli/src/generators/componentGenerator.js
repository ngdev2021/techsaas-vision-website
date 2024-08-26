import {
  createFileWithDirCheck,
  ensureCorrectDirectory,
} from '../utils/fileUtils.js';
import { loadCustomTemplate } from '../config/templates.js';

export const createComponent = async (
  name,
  targetDir,
  options,
  isBackend
) => {
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
  // Handle styles, tests, and storybook
};
