import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';

// Plugin Imports
import angularEslint from '@angular-eslint/eslint-plugin';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import mochaPlugin from 'eslint-plugin-mocha';
import nPlugin from 'eslint-plugin-n';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

export default [
    js.configs.recommended,

    {
        // 1. Target both JS and TS files
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            // --- ADDED: TypeScript Parser ---
            parser: tsParser, 
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.mocha,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            n: nPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            import: importPlugin,
            'unused-imports': unusedImportsPlugin,
            mocha: mochaPlugin,
            'eslint-plugin': eslintPlugin,
            '@angular-eslint': angularEslint,
        },
        rules: {
            // Include recommended TS rules
            ...tseslint.configs.recommended.rules,
            '@typescript-eslint/no-unused-expressions': 'off', // Disable conflicting rule
            
            // --- React & Hooks ---
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react-hooks/rules-of-hooks': 'error',
            

            // --- Node & Imports ---
            'n/no-missing-require': 'error',
            'import/no-duplicates': 'error',

            // --- Unused Imports (Refined for TS) ---
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off', // Turn off both to let plugin handle it
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
            ],

            // --- Mocha & Angular ---
            'mocha/no-exclusive-tests': 'error',
            '@angular-eslint/component-selector': [
                'error',
                { type: 'element', prefix: 'app', style: 'kebab-case' }
            ]
        },
        settings: {
            react: { version: 'detect' },
        }
    }
];