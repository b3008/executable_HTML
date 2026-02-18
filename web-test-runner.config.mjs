import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  files: 'tests/**/*.test.js',
  nodeResolve: true,
  coverageConfig: {
    reporters: ['lcov', 'text'],
    exclude: ['**/lib/**', '**/node_modules/**'],
  },
  plugins: [
    {
      name: 'remap-lodash',
      async resolveImport({ source }) {
        if (source === 'lodash') {
          return `/node_modules/lodash-es/lodash.js`;
        }
      },
    },
    {
      name: 'fix-jsep-interop',
      transform(context) {
        if (context.path.endsWith('aa-choose.ts') || context.path.endsWith('aa-choose.js') ||
            context.path.endsWith('aa-variable.ts') || context.path.endsWith('aa-variable.js')) {
          return {
            body: context.body.replace(
              /import\s+\*\s+as\s+jsep\s+from\s+['"]jsep['"]/,
              "import { Jsep as _JsepClass } from 'jsep'; const jsep = (expr) => (new _JsepClass(expr)).parse()"
            ),
          };
        }
      },
    },
    esbuildPlugin({
      ts: true,
      target: 'es2020',
      tsconfig: './tsconfig.json',
    }),
  ],
};
