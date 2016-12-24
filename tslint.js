const path = require('path')

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules')
  ],
  rules: {
    'adjacent-overload-signatures': true,
    'no-internal-module': true,
    'no-reference': true,
    'no-var-requires': true,
    'prefer-for-of': true,
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        parameter: 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      },
      {
        'call-signature': 'onespace',
        'index-signature': 'onespace',
        parameter: 'onespace',
        'property-declaration': 'onespace',
        'variable-declaration': 'onespace'
      }
    ],
    'no-arg': true,
    'no-construct': true,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-eval': true,
    'no-unsafe-finally': true,
    'no-unused-expression': true,
    'no-var-keyword': true,
    'switch-default': true,
    'triple-equals': [
      true,
      'allow-null-check'
    ],
    'use-isnan': true,
    eofline: true,
    indent: [
      true,
      'spaces'
    ],
    'linebreak-style': [
      true,
      'LF'
    ],
    'no-trailing-whitespace': true,
    'trailing-comma': [
      true,
      {
        multiline: 'never',
        singleline: 'never'
      }
    ],
    'class-name': true,
    'interface-name': [
      true,
      'never-prefix'
    ],
    'new-parens': true,
    'no-angle-bracket-type-assertion': true,
    'object-literal-key-quotes': [
      true,
      'as-needed'
    ],
    'object-literal-shorthand': true,
    quotemark: [
      true,
      'single',
      'jsx-double'
    ],
    semicolon: [
      true,
      'never'
    ],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-module',
      'check-type',
      'check-typecast'
    ],
    'no-constant-condition': true,
    'no-control-regex': true,
    'no-duplicate-case': true,
    'no-empty-character-class': true,
    'no-extra-semi': true,
    'no-invalid-regexp': true,
    'no-irregular-whitespace': true,
    'no-regex-spaces': true,
    'no-sparse-arrays': true,
    'no-unexpected-multiline': true,
    'no-multi-spaces': true,
    'block-spacing': [
      true,
      'always'
    ]
  }
}
