import format from 'eslint-plugin-format';

export function htmlRules() {
  return {
    files: ['**/*.html'],
    languageOptions: { parser: format.parserPlain },
    plugins: { format },
    rules: {
      'format/prettier': [2, { parser: 'html',
        arrowParens: 'always',
        bracketSpacing: true,
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'css',
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 120,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        semi: true,
        singleAttributePerLine: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
        vueIndentScriptAndStyle: true,
      }],
    },
  };
}