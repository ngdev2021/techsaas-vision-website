const fs = require('fs');
const path = require('path');
const {
  ensureCorrectDirectory,
  createFileWithDirCheck,
} = require('../techsaas-cli');

// Mock the `fs` methods to avoid actual file system changes during tests
jest.mock('fs');

describe('TechSaaS CLI Utility Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create directory and file if not exist', () => {
    const filePath = path.join(
      'techsaas-vision-frontend',
      'src',
      'components',
      'TestComponent.js'
    );
    const fileContent = 'Test Content';

    // Mock `fs.existsSync` to return false for directory check
    fs.existsSync.mockReturnValue(false);

    createFileWithDirCheck(filePath, fileContent);

    // Ensure `mkdirSync` is called to create the directory
    expect(fs.mkdirSync).toHaveBeenCalledWith(
      path.dirname(filePath),
      { recursive: true }
    );

    // Ensure `writeFileSync` is called to create the file with correct content
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      filePath,
      fileContent
    );
  });

  test('should return correct directory for frontend', () => {
    const targetPath = 'components/TestComponent';
    const result = ensureCorrectDirectory(targetPath, false);
    const expectedPath = path.join(
      process.cwd(),
      'techsaas-vision-frontend',
      'src',
      'components',
      'TestComponent'
    );

    expect(result).toBe(expectedPath);
  });

  test('should return correct directory for backend', () => {
    const targetPath = 'services/TestService';
    const result = ensureCorrectDirectory(targetPath, true);
    const expectedPath = path.join(
      process.cwd(),
      'techsaas-vision-backend',
      'src',
      'services',
      'TestService'
    );

    expect(result).toBe(expectedPath);
  });

  test('should throw error if src directory does not exist', () => {
    const targetPath = 'components/TestComponent';

    // Mock `fs.existsSync` to return false for `src` directory check
    fs.existsSync.mockReturnValue(false);

    expect(() =>
      ensureCorrectDirectory(targetPath, false)
    ).toThrowError('src directory not found');
  });

  // Add more tests for additional functionality (e.g., state management, backend file checks, etc.)
});
