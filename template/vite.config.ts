import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/react-sorcery/",
    css: {
        modules: {
            generateScopedName: 'react_press_[name]__[local]__[hash:base64:5]'
        },
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    resolve: {
        mainFields: ['browser', 'module', 'main'],
        extensions: ['.js', '.json', '.jsx', '.tsx', '.ts'],
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './src') },
        ]
    },
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            },
        },
    }
})
