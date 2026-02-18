import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  files: 'tests/**/*.test.ts',
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
    esbuildPlugin({
      ts: true,
      target: 'es2020',
      tsconfig: './tsconfig.json',
    }),
  ],
};
