export function startedConfig() {
  return {
    react: false,
    stylistic: true,
    typescript: true,
    vue: true,
    jsonc: true,
    unicorn: false,
    env: {
      'vue/setup-compiler-macros': true,
    },
    ignores: [
      '**/fixtures',
      '**/test',
      '**/node_modules',
      '**/dist',
      '**/cypress',
      '**/debug',
      '**/test',
      '**/backup',
    ],
  };
}