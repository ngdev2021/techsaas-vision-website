// Logger utilities
// src/utils/logger.mjs
import fs from 'fs';

export const log = (message, level = 'info') => {
  const logMessage = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}`;
  console.log(logMessage);
  fs.appendFileSync('src/logs/app.log', logMessage + '\n');
};

export const error = (message) => log(message, 'error');
export const warn = (message) => log(message, 'warn');
