const esbuild = require('esbuild');
const copyStaticFiles = require('esbuild-copy-static-files');

const production = process.argv.includes('--production');

esbuild.build({
    entryPoints: ['./dashboard/src/index.ts'],
    bundle: true,
    format: 'esm',
    outfile: './dist/bundle.js',
    loader: { '.css': 'text' }, // Process CSS
    plugins: [
        copyStaticFiles({
            src: './src', // Copy static files like HTML and CSS
            dest: './dist',
            exclude: ['**/*.ts'], // Skip TypeScript files
        }),
    ],
    sourcemap: !production, // Include sourcemap for development
    minify: production, // Minify output for production
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
