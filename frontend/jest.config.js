export default {
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/**/*.test.js'],
    moduleFileExtensions: ['js', 'json', 'node'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    // Add the 'type' line
    type: 'module',
  };
  