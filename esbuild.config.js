import esbuild from 'esbuild';

// Handle both toolkit and drizzle UI scripts
esbuild.build({
  entryPoints: [
    'src/assets/drizzle/scripts/drizzle.js',
    'src/assets/toolkit/scripts/toolkit.js'
  ],
  bundle: true,
  minify: process.env.NODE_ENV === 'production',
  sourcemap: process.env.NODE_ENV !== 'production',
  outdir: 'dist/assets',
  format: 'esm',
  loader: {
    '.js': 'jsx',
  },
  // watch: process.argv.includes('--watch'),
}).catch(() => process.exit(1));
