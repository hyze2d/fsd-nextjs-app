module.exports = {
  plugins: [
    'stylelint-prettier',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
    'stylelint-high-performance-animation'
  ],

  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ],

  rules: {
    // prettier
    'prettier/prettier': true,

    // standard
    // avoid errors
    'at-rule-no-unknown': true,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'custom-property-no-missing-var-function': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values']
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'no-irregular-whitespace': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements']
      }
    ],
    'string-no-newline': true,
    'unit-no-unknown': true,
    // conventions
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'angle',
    'color-function-notation': 'modern',
    'color-hex-alpha': 'never',
    'color-hex-length': 'long',
    'color-named': 'never',
    'length-zero-no-unit': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'function-url-quotes': 'always',
    // TODO: add regexp
    // 'keyframes-name-pattern':  /reg/,
    // 'custom-property-pattern':  /reg/,
    'number-max-precision': 4,
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'declaration-no-important': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-single-line-max-declarations': 1,

    // Stylistic
    'value-keyword-case': 'lower',
    'function-name-case': 'lower',
    'rule-empty-line-before': 'always',
    'at-rule-empty-line-before': 'always',
    'color-hex-case': 'lower',
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'property-case': 'lower',
    'declaration-bang-space-after': 'always',

    // animations
    'plugin/no-low-performance-animation-properties': true,

    // order
    'order/properties-order': [],

    // rational
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': true,
        'empty-line-between-groups': true
      }
    ]
  }
};
