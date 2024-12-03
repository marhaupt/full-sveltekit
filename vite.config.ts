import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
    plugins: [
        enhancedImages(),
        sveltekit(),
        paraglide({
            project: './project.inlang',
            outdir: './src/lib/paraglide',
        }),
    ],
});
