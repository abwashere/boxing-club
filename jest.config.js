const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // If your project is using Module Path Aliases, you will need to configure Jest to resolve the imports by matching the paths option in the tsconfig.json file with this moduleNameMapper option:
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/app/(.*)$': '<rootDir>/app/(user)/$1',
    '^@/api/(.*)$': '<rootDir>/app/(user)/api/$1',
    '^@/studio/(.*)$': '<rootDir>/app/(studio)/studio/$1',
  },

  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);