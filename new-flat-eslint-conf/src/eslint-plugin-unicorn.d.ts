interface RuleModule {
  meta: {
    name: string
    version: string
  }
  create: (context: any) => any

}

interface Config {
  plugins: string[] | {
    unicorn: {
      meta: {
        name: string
        version: string
      }
      rules: {
        [x: string]: RuleModule
      }
    }
  }
  rules: any
  env: {
    es2024: boolean
  }
  parserOptions: Record<string, string>
}
type List = 'recommended' | 'all' | 'flat/recommended' | 'flat/all';
const EsUnicorn = {} as {
  meta: {
    name: string
    version: string
  }
  rules: {
    [x: string]: RuleModule
  }
  configs: Record<List, Config>
};

declare module 'eslint-plugin-unicorn' {
  export default EsUnicorn;
}