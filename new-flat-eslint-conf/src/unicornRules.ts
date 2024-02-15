import unicorn from 'eslint-plugin-unicorn';

const rules = {
  'unicorn/no-console-spaces': [0],
  'unicorn/no-unnecessary-polyfills': [2, { targets: { node: 'current' } }],
  'unicorn/no-array-push-push': [2, { ignore: ['readable'] }],
  'unicorn/prefer-switch': [2, { minimumCases: 3 }],
  'unicorn/switch-case-braces': [2, 'always'],
  'unicorn/filename-case': [0],
  'unicorn/catch-error-name': [1],
  'unicorn/consistent-function-scoping': [2],
  'unicorn/no-array-reduce': [0],
  'unicorn/no-keyword-prefix': [0, { disallowedPrefixes: ['className'] }],
  'unicorn/prevent-abbreviations': [
    1,
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
};

export function unicornRules() {
  return {

    rules: Object.assign(
      unicorn.configs['flat/recommended'].rules,
      rules,
    ),
  };
}