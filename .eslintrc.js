module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
            files: ['*.ts', '*.tsx'],
        },
        {
            files: ['*.spec.ts', '*.spec.tsx'],
            rules: {
                '@typescript-eslint/no-explicit-any': ['off'],
                '@typescript-eslint/no-magic-numbers': ['off'],
                '@typescript-eslint/no-unsafe-argument': ['off'],
                '@typescript-eslint/no-unsafe-assignment': ['off'],
                '@typescript-eslint/no-unsafe-call': ['off'],
                'no-unsafe-member-access': ['off'],
            },
        },
    ],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react-hooks', 'etc', 'react', 'eslint-plugin-unicorn'],
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array',
            },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-magic-numbers': ['error', { ignoreEnums: true, ignore: [0] }],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/semi': 'error',
        curly: 'error',
        'dot-notation': 'error',
        'etc/no-const-enum': 'error',
        eqeqeq: ['error', 'always'],
        'guard-for-in': 'error',
        'import/order': [
            'error',
            {
                'newlines-between': 'never',
                groups: [
                    ['builtin', 'external', 'internal', 'unknown', 'object', 'type'],
                    'parent',
                    ['sibling', 'index'],
                ],
                distinctGroup: false,
                pathGroupsExcludedImportTypes: [],
                pathGroups: [
                    {
                        pattern: './',
                        patternOptions: {
                            nocomment: true,
                            dot: true,
                        },
                        group: 'sibling',
                        position: 'before',
                    },
                    {
                        pattern: '.',
                        patternOptions: {
                            nocomment: true,
                            dot: true,
                        },
                        group: 'sibling',
                        position: 'before',
                    },
                    {
                        pattern: '..',
                        patternOptions: {
                            nocomment: true,
                            dot: true,
                        },
                        group: 'parent',
                        position: 'before',
                    },
                    {
                        pattern: '../',
                        patternOptions: {
                            nocomment: true,
                            dot: true,
                        },
                        group: 'parent',
                        position: 'before',
                    },
                ],
            },
        ],
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-magic-numbers': 'off',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-redeclare': 'error',
        'no-restricted-imports': [
            'error',
            {
                name: 'react-i18next',
                importNames: ['useTranslation'],
                message: 'Use next-i18next/useTranslation instead.',
            },
        ],
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-shadow': 'off',
        'no-sparse-arrays': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'off',
        radix: 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'spaced-comment': 'error',
        'unicorn/filename-case': ['error', { case: 'camelCase' }],
        'use-isnan': 'error',
        'valid-typeof': 'error',
    },
};
