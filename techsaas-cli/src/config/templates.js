import fs from 'fs';
import path from 'path';

export const loadCustomTemplate = (templateType, componentName) => {
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
