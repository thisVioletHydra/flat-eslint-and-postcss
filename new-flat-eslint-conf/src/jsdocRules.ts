export function jsdocRules() {
  return {
    files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
    rules: {

      'jsdoc/empty-tags': [2],
    },
  };
}