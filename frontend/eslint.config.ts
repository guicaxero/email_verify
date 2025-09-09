import tsParser from '@typescript-eslint/parser'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
  // Ignora a pasta de build
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    // Extensões de regras
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react-refresh/recommended'
    ],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json'
      },
      globals: globals.browser
    },

    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    },

    settings: {
      react: {
        version: 'detect'
      }
    }
  }
])
