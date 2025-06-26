import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: true
        }
      ],
      'no-unused-vars': 'off',
      'no-anonymous-default-export': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-case-declarations': 'off',
      'no-prototype-builtins': 'warn',
      'no-useless-escape': 'warn',
      'simple-import-sort/exports': 'error',
      'prefer-template': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-empty-pattern': 'warn',
      'no-unsafe-optional-chaining': 'warn',
      'prefer-const': 'warn',
      'no-irregular-whitespace': 'warn',
      'no-console': 'warn',
      'no-nested-ternary': 'off',
      'consistent-return': 'off',
      'no-param-reassign': 'error',
      'no-unused-expressions': 'off',
      'no-promise-executor-return': 'off',
      'no-underscore-dangle': 'off',
      'arrow-body-style': 'off',
      'no-useless-catch': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            [
              // Packages `react` related packages come first.
              '^react',
              '^@?\\w',
              // Internal packages.
              '^(@|components)(/.*|$)',
              // Side effect imports.
              '^\\u0000',
              // Parent imports. Put `..` last.
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              // Other relative imports. Put same-folder imports and `.` last.
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
              // Style imports.
              '^.+\\.?(css)$'
            ]
          ]
        }
      ],
    }
  },

])

