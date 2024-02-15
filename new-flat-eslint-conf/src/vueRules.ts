import { parseForESLint as tsParser } from '@typescript-eslint/parser';
import { parseForESLint as vueParser } from 'vue-eslint-parser';

export function vueRules() {
  return {
    languageOptions: {
      // parser: (code, options) => vueParser(code, options),

      parserOptions: {
        // parser: vueParser,
        // parser: tsParser,
        // parser: 'vue-eslint-parser',
        
        // extraFileExtensions: ['.vue'],
        // sourceType: 'module',
        // ecmaVersion: 'latest',
        // parser: '@typescript-eslint/parser',
      },
    },
    files: ['**/*.vue'],
    ignores: ['**/*.css', '**/*.scss', '**/*.sass', '**/*.less', '**/*.stylus', '**/*.styl', '**/*.pcss', '**/*.postcss'],
    rules: {
      'style/indent': [0],
      'vue/script-indent': [2, 2, { baseIndent: 1 }],
      'vue/html-indent': [2, 2, { baseIndent: 1 }],
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
      'vue/block-tag-newline': [2],
      'vue/component-name-in-template-casing': [
        2,
        'PascalCase',
        {
          ignores: ['component', 'client-only', 'keep-alive'],
          registeredComponentsOnly: true,
        },
      ],
      'vue/component-tags-order': [2, { order: ['template', 'script', 'style'] }],
      'vue/block-order': [2, { order: ['template', 'script', 'style'] }],
      'vue/html-comment-content-spacing': [2, 'always', { exceptions: ['*'] }],
      'vue/multi-word-component-names': [0, { ignores: [] }],
      'vue/no-template-key': [2],
      'vue/no-unsupported-features': [2],
      'vue/no-unused-vars': [0],
      'vue/no-useless-v-bind': [
        2,
        {
          ignoreIncludesComment: false,
          ignoreStringEscape: false,
        },
      ],
      'vue/no-v-for-template-key': [0],
      'vue/no-v-for-template-key-on-child': [0],
      'vue/padding-line-between-blocks': [2],
      'vue/prefer-template': [2],
      'vue/require-v-for-key': [2],

      'vue/script-setup-uses-vars': [1],
      'vue/v-on-function-call': [2, 'never', { ignoreIncludesComment: false }],
      'vue/valid-v-for': [2],
    },
  };
}