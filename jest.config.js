/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],

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

module.exports = createJestConfig(customJestConfig);
