import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    root: 'src',
    build: {
        outDir: '../deploy',
        emptyOutDir: false,
        rollupOptions: {
            input: {
                main: 'src/index.html'
            },
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name?.endsWith('.css')) {
                        return 'css/[name]-[hash].[ext]'
                    }
                    return 'assets/[name]-[hash].[ext]'
                },
                entryFileNames: 'js/[name]-[hash].js',
                chunkFileNames: 'js/[name]-[hash].js'
            }
        },
    },
    plugins: [
        tailwindcss(),
    ],
})