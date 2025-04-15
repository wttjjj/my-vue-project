// packages/admin/vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig( {
    plugins: [vue()],
    resolve: {
        alias: {
            '@core': resolve( __dirname, '../../core/src' ),
        },
    },
} );
