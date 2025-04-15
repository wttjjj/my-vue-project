// packages/core/vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig( {
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve( __dirname, 'src/index.ts' ),
            name: 'Core',
            fileName: 'core',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
} );
