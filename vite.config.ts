import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['es'],
            name: 'executable HTML',
            fileName: 'index',


        },
        rollupOptions: {
            // If we want to publish standalone components we don't externalize lit,
            // if you are going to use lit in your own project, you can make it a dep instead.
            // external: /^lit/, <-- comment this line

            output: {
                assetFileNames: (assetInfo) => {
                    console.log(assetInfo)
                    console.log(assetInfo.name);
                    return assetInfo.name;
                },
            },
            external: /^@material/, // <-- add this line
        },
    },
})