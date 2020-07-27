module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },

  parser: '@typescript-eslint/parser',
  processor: 'disable/disable',
  plugins: ['@typescript-eslint', 'import', 'prettier', 'disable'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],

  globals: {
    globalThis: true,
  },

  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/extensions': ['error', 'never', { ignorePackages: true }],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error',
    'import/no-internal-modules': [
      'error',
      {
        allow: ['**/src/**/*'],
      },
    ],
    'import/no-relative-parent-imports': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/unambiguous': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        directory: './packages/*/tsconfig.json',
      },
    },
  },

  overrides: [
    {
      files: ['*.js'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: '2017',
        sourceType: 'module',
      },
      settings: {
        'disable/plugins': ['@typescript-eslint'],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/unambiguous': 'off',
      },
    },
    {
      files: ['**/test/**/*.ts'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
    {
      files: ['**/*.spec.ts'],
      env: {
        browser: true,
        jasmine: true,
      },
      extends: ['plugin:jasmine/recommended'],
      plugins: ['jasmine'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/unambiguous': 'off',
        'no-restricted-imports': 'off',
        'import/no-internal-modules': 'off',
        'import/no-relative-parent-imports': 'off',
      },
    },
    {
      files: ['.eslintrc.js', '*.config.js'],
      env: {
        node: true,
      },
      parser: 'espree',
      parserOptions: {
        sourceType: 'script',
      },
      plugins: ['node'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['rollup.config.js'],
      env: {
        node: true,
      },
      parser: 'espree',
      parserOptions: {
        ecmaVersion: '2017',
        sourceType: 'module',
      },
      plugins: ['node'],
      rules: {
        'no-restricted-imports': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-internal-modules': 'off',
        'import/no-relative-parent-imports': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
}
