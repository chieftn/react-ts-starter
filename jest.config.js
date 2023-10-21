const { defaults } = require('jest-config');

/** @type {import('jest').Config} */
const config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        './src/**',
        '!src/index.tsx',
        '!src/localization/**/*',
        '!src/shared/constants.ts',
        '!src/configuration/**/*',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
    coveragePathIgnorePatterns: ['.spec.tsx', '.json', '.spec.ts', '.snap'],
    preset: 'ts-jest/presets/js-with-ts',
    setupFiles: ['./jest.setup.js'],
    testEnvironment: 'jsdom',
};

module.exports = config;
