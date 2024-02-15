import perfectionist from 'eslint-plugin-perfectionist';

export function perfectionistRules() {
  return {
    plugins: { perfectionist },
    files: ['!**/*.json'],
    rules: {
      'perfectionist/sort-imports': [
        2,
        {
          'order': 'asc',
          'type': 'natural',
          'groups': [
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          'custom-groups': {
            value: {
              vue: ['vue', 'vue-*'],
            },
            type: {
              vue: ['vue', 'vue-*'],
            },
          },
        },
      ],
      'perfectionist/sort-array-includes': [2, { 'ignore-case': true, 'type': 'natural' }],
      'perfectionist/sort-objects': [0, { 'ignore-case': true, 'type': 'natural' }],

    },
  };
}
