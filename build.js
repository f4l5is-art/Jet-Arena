import { build } from 'esbuild';
import { cpSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
cpSync('public', 'dist', { recursive: true });

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es2020'],
  outfile: 'dist/app.js',
});

// Service worker precache list: every file in dist except the worker itself.
const files = readdirSync('dist').filter((f) => f !== 'sw.js');
const sw = readFileSync('public/sw.js', 'utf8').replace(
  '__FILES__',
  JSON.stringify(['./', ...files.map((f) => './' + f)])
);
const stamp = Date.now().toString(36);
writeFileSync('dist/sw.js', sw.replace('__VERSION__', stamp));
console.log('built dist/ with', files.length, 'files');
