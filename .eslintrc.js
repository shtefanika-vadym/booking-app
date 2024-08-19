module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'next',
    'prettier',
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  ignorePatterns: ['.next'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
    'no-relative-import-paths',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    curly: ['off'],
    'no-shadow': 'off',
    'no-useless-escape': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'react-hooks/exhaustive-deps': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_'
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2
      }
    ],
    'react/no-unescaped-entities': 'off',
    'no-relative-import-paths/no-relative-import-paths': ['error'],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports'
      }
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never'
      }
    ]
  }
}
