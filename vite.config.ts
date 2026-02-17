import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
            name: 'executable HTML',
            fileName: 'index',
        },
        cssCodeSplit: true,
        rollupOptions: {},
    },
    plugins: [
        cssInjectedByJsPlugin(),
    ],
})
