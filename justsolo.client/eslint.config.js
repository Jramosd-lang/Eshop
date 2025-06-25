import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^[A-Z_]',
          argsIgnorePattern: '^_',
          // Ignora imports de framer-motion aunque no se usen explícitamente
          vars: 'all',
          caughtErrors: 'none',
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Ignora advertencias de imports no usados de framer-motion
      'no-unused-imports': [
        'error',
        {
          ignore: ['framer-motion'],
        },
      ],
    },
    settings: {
      // Para asegurar que eslint reconozca framer-motion como globalmente usado
      'import/core-modules': ['framer-motion'],
    },
  },
]
