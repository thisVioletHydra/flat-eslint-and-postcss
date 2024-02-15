export function jsoncRules() {
  return {
    files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
    rules: {
      'jsonc/object-curly-newline': [2, { consistent: true }],
      'jsonc/sort-array-values': [0],
      'jsonc/sort-keys': [0],
    },
  };
}