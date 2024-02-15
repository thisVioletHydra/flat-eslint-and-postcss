export function baseRules() {
  return {
    rules: {
      'no-console': [0],
      'curly': [2, 'multi-line'],
      'antfu/if-newline': [0],
      'antfu/consistent-list-newline': [0],
      'no-unused-vars': [1, { vars: 'all', args: 'none' }],
      'unused-imports/no-unused-vars': [0, { vars: 'all', args: 'none' }],
      'vars-on-top': [0],
      'no-dupe-keys': [1],
      'eqeqeq': [2, 'always'],
      'sort-imports': [0],
      'import/order': [0],
      'import/no-anonymous-default-export': [2],
      'require-await': [2],
      'no-sparse-arrays': [1],
      'prefer-destructuring': [1, {
        "array": true,
        "object": true,
      }],

    },
  };
}