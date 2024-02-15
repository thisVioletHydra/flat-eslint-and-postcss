/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
  // ----------- new -----------
  '@typescript-eslint/adjacent-overload-signatures': 2,

  '@typescript-eslint/await-thenable': 2,
  '@typescript-eslint/ban-types': [
    'error',
    {
      extendDefaults: true,
      types: {
        '{}': false,
      },
    },
  ],

  '@typescript-eslint/consistent-type-imports': [2, { prefer: 'type-imports' }],

  // @typescript-eslint
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/explicit-module-boundary-types': 0,
  '@typescript-eslint/interface-name-prefix': 0,
  '@typescript-eslint/naming-convention': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-non-null-assertion': 0,
  '@typescript-eslint/no-unused-vars': [0, { argsIgnorePattern: '^_' }],

  '@typescript-eslint/padding-line-between-statements': [
    2,
    {
      blankLine: 'always',
      next: ['const', 'let', 'var', 'function', 'multiline-const', 'multiline-block-like', 'multiline-expression'],
      prev: ['interface', 'type'],
    },
    {
      blankLine: 'always',
      next: ['export', 'function'],
      prev: ['type'],
    },
    {
      blankLine: 'always',
      next: ['export'],
      prev: ['*'],
    },
    {
      blankLine: 'always',
      next: ['type'],
      prev: ['interface'],
    },
    {
      blankLine: 'always',
      next: ['interface'],
      prev: ['type'],
    },
    {
      blankLine: 'always',
      next: ['if'],
      prev: ['*'],
    },
    {
      blankLine: 'never',
      next: ['type'],
      prev: ['type'],
    },
    {
      blankLine: 'never',
      next: ['singleline-const', 'singleline-let', 'singleline-var'],
      prev: ['singleline-const', 'singleline-let', 'singleline-var'],
    },
    {
      blankLine: 'any',
      next: ['function'],
      prev: ['function'],
    },
    {
      blankLine: 'any',
      next: ['function'],
      prev: ['const', 'let'],
    },
    {
      blankLine: 'any',
      next: ['export'],
      prev: ['export'],
    },
  ],

  '@typescript-eslint/prefer-namespace-keyword': 2,

  '@typescript-eslint/require-await': 2,
  '@typescript-eslint/return-await': 2,
  'array-callback-return': [2, { allowImplicit: true }],
  'arrow-body-style': 0,
  'comma-dangle': [2, 'only-multiline'],
  // camelcase: 2,
  'consistent-return': 2,
  'css-lcurlyexpected': 0,

  eqeqeq: [2, 'smart'],
  'guard-for-in': 2,
  'id-denylist': [1, 'err', 'e', 'cb'],
  'id-length': [2, { exceptions: ['f'] }],
  'id-match': 2,
  'import/default': 2,
  'import/export': 2,
  'import/extensions': [2, { ignorePackages: true }],
  'import/first': 2,
  'import/named': 0,
  'import/namespace': 2,
  // 'linebreak-style': [0, isProduction ? 'unix' : 'windows'],
  // 'no-console': isProduction ? 1 : 0,
  // 'no-debugger': isProduction ? 1 : 0,

  // 'no-magic-numbers': 2,

  'import/newline-after-import': [2, { count: 1 }],
  'import/no-default-export': 0,
  'import/no-extraneous-dependencies': [
    2,
    {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true,
    },
  ],
  'import/no-named-as-default': 1,
  'import/no-unresolved': [2, { amd: true, commonjs: true, ignore: ['~virtual'] }],
  'import/no-unused-modules': [0, { unusedExports: true }],
  'import/prefer-default-export': 0,
  indent: [0, 2],

  'logical-assignment-operators': 2,
  'max-classes-per-file': 0,
  'max-len': [
    0,
    256,
    2,
    {
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],
  'no-alert': 2,
  'no-empty-static-block': 2,
  'no-eq-null': 2,
  'no-eval': 2,
  'no-implicit-coercion': 2,
  'no-import-assign': 2,
  'no-nested-ternary': 0,
  'no-shadow-restricted-names': 2,
  'no-undef': 0,

  'no-underscore-dangle': 0,

  'no-unreachable': 0,
  // other
  'no-unused-vars': [0, { argsIgnorePattern: '^_' }],

  'no-var': 2,
  'padding-line-between-statements': [
    2,
    { blankLine: 'always', next: 'return', prev: '*' },
    { blankLine: 'always', next: 'for', prev: '*' },
    { blankLine: 'always', next: '*', prev: 'for' },
    {
      blankLine: 'always',
      next: ['function', 'multiline-const', 'multiline-block-like', 'multiline-expression'],
      prev: ['function', 'multiline-const', 'multiline-block-like', 'multiline-expression'],
    },
  ],

  // FIXME  need update this rules
  // '@typescript-eslint/naming-convention': 2,

  'prefer-arrow-callback': 0,
  'prettier/prettier': [0, {}, { usePrettierrc: true }],
  semi: [2, 'always'],
  'sort-imports': [
    2,
    {
      allowSeparatedGroups: true,
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: true,
      memberSyntaxSortOrder: [
        //
        'all',
        'multiple',
        'single',
        'none',
      ],
    },
  ],
  'sort-vars': 2,
  'space-before-function-paren': [0, 'always'],
  'unicorn/filename-case': 0,
  'unicorn/no-array-reduce': 0,
  'unicorn/no-keyword-prefix': [0, { disallowedPrefixes: ['className'] }],
  'unicorn/prevent-abbreviations': [
    2,
    {
      allowList: {
        dir: true,
        languageMsg: true,
        msg: true,
        msgGlobal: true,
        props: true,
        useLanguageMsg: true,
      },
      replacements: {
        args: {
          arguments: false,
          rest: true,
        },
        arr: {
          array: false,
          items: true,
        },
        dir: {
          direction: false,
          directory: false,
        },
        msg: {
          message: false,
          msg: true,
        },
      },
    },
  ],
  'vue/attributes-order': [
    2,
    {
      alphabetical: false,
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    },
  ],
  'vue/block-tag-newline': 2,
  'vue/component-name-in-template-casing': [
    2,
    'PascalCase',
    {
      ignores: ['component', 'client-only', 'keep-alive'],
      registeredComponentsOnly: true,
    },
  ],
  'vue/component-tags-order': [2, { order: ['template', 'script', 'style'] }],
  'vue/html-comment-content-spacing': [2, 'always', { exceptions: ['*'] }],
  'vue/multi-word-component-names': [0, { ignores: [] }],
  'vue/no-template-key': 2,
  'vue/no-unsupported-features': 2,
  // ----------- -----------

  'vue/no-unused-vars': 0,
  'vue/no-useless-v-bind': [
    2,
    {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    },
  ],
  'vue/no-v-for-template-key': 0,
  'vue/no-v-for-template-key-on-child': 0,
  'vue/padding-line-between-blocks': 2,
  'vue/prefer-template': 2,
  'vue/require-v-for-key': 2,

  'vue/script-setup-uses-vars': 1,
  'vue/v-on-function-call': [2, 'never', { ignoreIncludesComment: false }],
  'vue/valid-v-for': 2,
};
