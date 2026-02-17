import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  files: 'tests/**/*.test.js',
  nodeResolve: true,
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
        if (context.path.endsWith('aa-choose.ts') || context.path.endsWith('aa-choose.js')) {
          return {
            body: context.body.replace(
              /import\s+\*\s+as\s+jsep\s+from\s+['"]jsep['"]/,
              "import jsep_default from 'jsep'"
            ).replace(
              /jsep\(/g,
              'jsep_default('
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
