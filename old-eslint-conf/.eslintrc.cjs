require('@rushstack/eslint-patch/modern-module-resolution');

const path = require('node:path');
const perfectionist = require('eslint-plugin-perfectionist');
const eslintRules = require('./unpacked.eslint.rules.cjs');

const _tsconfig = require('./tsconfig.json');

const _alias = _tsconfig.compilerOptions.paths;
const arrayType = ['.js', '.mjs', '.jsx', '.ts', '.d.ts', '.tsx', '!.json'];
const listFiles = {
  vue: ['*.vue', '*.html'],
  js: ['*.js', '*.cjs', '*.mjs', '*.jsx', '*.ts', '*.d*.ts', '*.tsx'],
};

const extendsRule = [
  './.eslintrc-auto-import.json',
  'eslint:recommended',
  'plugin:import/recommended',
  'plugin:import/typescript',
  'plugin:regexp/recommended',
  'plugin:sonarjs/recommended',
  'plugin:unicorn/all',
  'plugin:perfectionist/recommended-natural',
  'prettier',
];
const pluginsRule = [
  'unicorn', //
  'import',
  'promise',
  'regexp',
  'sonarjs',
  'perfectionist',
  'prettier',
];

const envRule = {
  browser: true,
  es6: true,
  node: true,
  jest: true,
};

const settingsRule = {
  'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },

  'import/extensions': arrayType,
  'import/resolver': {
    typescript: {
      alwaysTryTypes: true,
      project: './tsconfig.json',
    },
    alias: true,

    node: { extensions: arrayType },

    'eslint-import-resolver-custom-alias': {
      alias: _alias,
      extensions: arrayType,
    },
  },

  'prettier-vue': {
    SFCBlocks: {
      template: true,
      script: true,
      style: true,

      customBlocks: {
        docs: { lang: 'markdown' },
        config: { lang: 'json' },
        module: { lang: 'js' },
        comments: false,
      },
    },
    usePrettierrc: true,

    fileInfoOptions: {
      withNodeModules: false,
    },
  },
};

const typescriptFiveBugfix = {
  'import/namespace': 0,
  'import/named': 0,
  'import/default': 0,
  'import/no-named-as-default': 0,
  'import/no-named-as-default-member': 0,
  'regexp/strict': 0,
  indent: [
    0,
    2,
    {
      SwitchCase: 1,
      MemberExpression: 1,
      FunctionDeclaration: { body: 1, parameters: 2 },
      CallExpression: { arguments: 1 },
      flatTernaryExpressions: true,
      offsetTernaryExpressions: true,
    },
  ],
};

// ---------------- START ----------------
module.exports = {
  root: true,

  overrides: [
    /**
     * -----------------------
     * RULES FOR JSON
     * -----------------------
     */
    {
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
      extends: ['plugin:jsonc/recommended-with-json', 'plugin:jsonc/prettier'],
      rules: {
        'jsonc/auto': 2,
      },
    },
    /**
     * -----------------------
     * RULES FOR Javascript and Typescript
     * -----------------------
     */
    {
      rules: {
        ...eslintRules,
        ...typescriptFiveBugfix,

        'unicorn/prevent-abbreviations': [
          1,
          {
            allowList: {
              props: true,
              Props: true,
            },
            checkFilenames: false,
            checkVariables: false,
            checkProperties: false,
            checkShorthandProperties: true,
            checkShorthandImports: true,
            checkDefaultAndNamespaceImports: true,
            replacements: {
              cmd: {
                command: true,
              },
              err: {
                error: true,
              },
            },
          },
        ],
      },
      files: listFiles.js,
      env: envRule,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        project: path.resolve(__dirname, 'tsconfig.json'),
        tsconfigRootDir: path.resolve(__dirname),
      },
      extends: [
        ...extendsRule,
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: pluginsRule,
      settings: settingsRule,
    },

    /**
     * -----------------------
     * RULES FOR VUE3
     * -----------------------
     */
    {
      rules: {
        ...eslintRules,
        ...typescriptFiveBugfix,
        ...{
          'vue/max-attributes-per-line': 0,
          'perfectionist/sort-vue-attributes': 0,
          'vue/singleline-html-element-content-newline': 0,
          'vue/html-self-closing': [
            1,
            {
              html: {
                void: 'always',
                normal: 'never',
                component: 'always',
              },
              svg: 'always',
              math: 'always',
            },
          ],
          'id-length': [2, { exceptions: ['f', 't'] }],

          'unicorn/prevent-abbreviations': 0,
        },
      },
      env: {
        ...envRule,
        'vue/setup-compiler-macros': true,
      },
      files: listFiles.vue,
      parser: 'vue-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        ecmaFeatures: { jsx: true },
        project: path.resolve(__dirname, 'tsconfig.json'),
        tsconfigRootDir: path.resolve(__dirname),
        '<i18n>': '@typescript-eslint/parser',
      },
      extends: [
        ...extendsRule,
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript/recommended',
      ],
      plugins: [...pluginsRule, 'vue'],
      settings: settingsRule,
    },
  ],
};
