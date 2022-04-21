module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: ['prettier/@typescript-eslint'],

  overrides: [
    {
      files: ['src/**/*.{ts,tsx}']
    }
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'prettier/prettier': [
      'warn',
      {
        usePrettierrc: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'use-isnan': ['error', { enforceForSwitchCase: true }],
    'react/void-dom-elements-no-children': 'warn',
    'react/no-unsafe': 'warn',
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/self-closing-comp': 'warn',
    'react/no-will-update-set-state': 'warn',
    'react/no-this-in-sfc': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-redundant-should-component-update': 'warn',
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-key': 'warn',
    'react/jsx-max-props-per-line': ['warn', { maximum: 7 }],
    'react/jsx-max-depth': ['warn', { max: 8 }],
    'arrow-body-style': ['warn', 'as-needed'],
    'dot-notation': 'warn',
    'jsx-quotes': ['warn', 'prefer-single'],
    'valid-typeof': 'warn',
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          'private-static-field',
          'protected-static-field',
          'public-static-field',
          'private-static-method',
          'protected-static-method',
          'public-static-method',
          'private-constructor',
          'protected-constructor',
          'public-constructor',
          'private-instance-field',
          'protected-instance-field',
          'public-instance-field',
          'private-instance-method',
          'protected-instance-method',
          'public-instance-method'
        ]
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
