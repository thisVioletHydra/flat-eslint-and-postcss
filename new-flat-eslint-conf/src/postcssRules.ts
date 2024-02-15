export function postcssRules() {
  return {
    files: ['**/*.css', '**/*.scss', '**/*.sass', '**/*.less', '**/*.stylus', '**/*.styl', '**/*.pcss', '**/*.postcss'],
    rules: {
      'style/indent': [2, 2, { baseIndent: 1 }],
    },
  };
}