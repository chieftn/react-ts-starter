const { defaults } = require('jest-config');

/** @type {import('jest').Config} */
const config = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/index.tsx',
        '!src/localization/i18n.ts',
        '!src/shared/constants.ts',
        '!src/configuration/**/*',
    ],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleNameMapper: {
        '\\.(css|scss|less)$': 'identity-obj-proxy',
    },
    preset: 'ts-jest/presets/js-with-ts',
    setupFiles: ['./jest.setup.js'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
};

module.exports = config;
