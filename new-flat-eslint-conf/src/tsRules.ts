export function tsRules() {
  return {
    files: ['**/*.?([cm])[jt]s?(x)', '**/*.vue'],
    rules: {
      'require-await': 0,
      'ts/require-await': [2],
      'ts/no-array-delete': [2],
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigDirName: '.',
      },
    },
  };
}