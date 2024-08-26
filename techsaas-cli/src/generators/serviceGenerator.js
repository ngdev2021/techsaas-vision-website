import {
  createFileWithDirCheck,
  ensureCorrectDirectory,
} from '../utils/fileUtils.js';

export const createService = async (
  name,
  targetDir,
  serviceType,
  fileExtension,
  isBackend
) => {
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
  // Optionally create test files, controllers, etc.
};
