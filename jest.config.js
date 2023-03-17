import nextJest from 'next/jest';

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
  testMatch: ['<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  // coverageThreshold: {
  //   global: {
  //     statements: 70,
  //     branches: 70,
  //     functions: 70,
  //     lines: 70,
  //   },
  // },
  // collectCoverageFrom: [
  //   '<rootDir>/**/*.{js,jsx,ts,tsx}',
  //   '!<rootDir>/**/*.test.{js,jsx,ts,tsx}',
  // ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
