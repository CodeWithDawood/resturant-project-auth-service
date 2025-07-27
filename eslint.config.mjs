// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

// /** @type {import("eslint").FlatConfig[]} */
export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    ignores: [
      'dist',
      'node_modules',
      'eslint.config.mjs',
      'jest.config.js',
      'scripts/generateKeys.mjs',
      'scripts/convertPemToken.mjs',
      '*.spec.ts',
      'tests/',
      'coverage/',
      '.github/',
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
      },
    },
    rules: {
      //   'no-console': 'error',
      'dot-notation': 'error',
    },
  },
);
