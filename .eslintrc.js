module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:effector/recommended',
    'plugin:effector/scope',
    '@feature-sliced',
    '@feature-sliced/eslint-config/rules/public-api/lite',
    '@feature-sliced/eslint-config/rules/import-order',
    'prettier/@typescript-eslint',
    'plugin:json/recommended'
  ],

  parser: '@typescript-eslint/parser',

  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'effector',
    'unused-imports'
  ],

  overrides: [
    {
      files: ['src/**/*.{ts,tsx}']
    }
  ],

  parserOptions: {
    ecmaVersion: 2018,

    sourceType: 'module',

    project: './tsconfig.json',

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

    'padding-line-between-statements': [
      'error',

      {
        blankLine: 'always',
        prev: 'import',
        next: 'import'
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'block'
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like'
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'export'
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like'
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'function'
      },

      {
        blankLine: 'always',
        prev: 'function',
        next: '*'
      },

      {
        blankLine: 'always',
        prev: 'const',
        next: 'let'
      },

      {
        blankLine: 'always',
        prev: 'let',
        next: 'const'
      },

      {
        blankLine: 'always',
        prev: 'const',
        next: 'let'
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'try'
      },

      {
        blankLine: 'always',
        prev: 'try',
        next: '*'
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'switch'
      },

      {
        blankLine: 'always',
        prev: 'switch',
        next: '*'
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'while'
      },

      {
        blankLine: 'always',
        prev: 'while',
        next: '*'
      },

      {
        blankLine: 'always',
        prev: '*',
        next: 'for'
      },

      {
        blankLine: 'always',
        prev: 'for',
        next: '*'
      }
    ],

    'unused-imports/no-unused-imports': 'error',

    'import/no-internal-modules': 'off',

    'import/group-exports': 'error',

    'import/exports-last': 'error',

    'import/export': 'error',

    'import/no-deprecated': 'error',

    '@typescript-eslint/consistent-type-exports': 'error',

    '@typescript-eslint/adjacent-overload-signatures': 'error',

    '@typescript-eslint/array-type': [
      'error',

      { default: 'array', readonly: 'array' }
    ],

    '@typescript-eslint/await-thenable': 'error',

    '@typescript-eslint/ban-ts-comment': [
      'error',

      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        minimumDescriptionLength: 5
      }
    ],

    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ],

    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true
      }
    ],

    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit'
      }
    ],

    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },

        singleline: {
          delimiter: 'semi'
        }
      }
    ],

    '@typescript-eslint/method-signature-style': ['error', 'property'],

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: [
          'camelCase',
          'strictCamelCase',
          'PascalCase',
          'StrictPascalCase',
          'UPPER_CASE'
        ],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      }
    ],

    '@typescript-eslint/no-base-to-string': 'error',

    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],

    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowConstructorOnly: true,
        allowWithDecorator: true
      }
    ],

    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true,
        ignoreRestArgs: true
      }
    ],

    '@typescript-eslint/no-floating-promises': 'error',

    '@typescript-eslint/no-for-in-array': 'error',

    '@typescript-eslint/no-inferrable-types': 'error',

    '@typescript-eslint/no-invalid-void-type': 'error',

    '@typescript-eslint/no-meaningless-void-operator': 'error',

    '@typescript-eslint/no-misused-new': 'error',

    '@typescript-eslint/no-misused-promises': 'error',

    '@typescript-eslint/no-namespace': 'error',

    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    '@typescript-eslint/no-non-null-assertion': 'error',

    '@typescript-eslint/no-redundant-type-constituents': 'error',

    '@typescript-eslint/no-require-imports': 'error',

    '@typescript-eslint/no-this-alias': 'error',

    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      {
        allowConstantLoopConditions: true
      }
    ],

    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    '@typescript-eslint/no-unsafe-argument': 'error',

    '@typescript-eslint/no-unsafe-assignment': 'error',

    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',

    '@typescript-eslint/no-useless-empty-export': 'error',

    '@typescript-eslint/no-var-requires': 'error',

    '@typescript-eslint/prefer-as-const': 'error',

    '@typescript-eslint/prefer-enum-initializers': 'error',

    '@typescript-eslint/prefer-for-of': 'error',

    '@typescript-eslint/prefer-includes': 'error',

    '@typescript-eslint/prefer-literal-enum-member': [
      'error',
      {
        allowBitwiseExpressions: true
      }
    ],

    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    '@typescript-eslint/prefer-optional-chain': 'error',

    '@typescript-eslint/prefer-readonly': 'error',

    '@typescript-eslint/prefer-readonly': 'error',

    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    '@typescript-eslint/prefer-return-this-type': 'error',

    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    '@typescript-eslint/prefer-ts-expect-error': 'error',

    '@typescript-eslint/promise-function-async': 'error',

    '@typescript-eslint/require-array-sort-compare': 'error',

    '@typescript-eslint/restrict-plus-operands': 'error',

    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true
      }
    ],

    '@typescript-eslint/strict-boolean-expressions': 'error',

    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],

    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true
      }
    ],

    '@typescript-eslint/unified-signatures': 'error',

    '@typescript-eslint/brace-style': ['error', '1tbs'],

    '@typescript-eslint/return-await': 'error',

    'no-implicit-globals': 'error',

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

    '@typescript-eslint/lines-between-class-members': ['error', 'always'],

    '@typescript-eslint/member-ordering': [
      'error',
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

// "lint-staged": {
//   "src/**/*.{ts,tsx}": [
//     "prettier --write",
//     "eslint --fix",
//     "git add"
//   ],
//   "src/**/*.scss": [
//     "prettier --write",
//     "stylelint --fix",
//     "git add"
//   ]
// },
// "husky": {
//   "hooks": {
//     "pre-commit": "lint-staged"
//   }
// },

// "commitlint": {
//   "plugins": [
//     "commitlint-plugin-jira-rules"
//   ],
//   "extends": [
//     "jira"
//   ],
//   "rules": {
//     "jira-task-id-max-length": [
//       2,
//       "always",
//       12
//     ]
//   }
// },
