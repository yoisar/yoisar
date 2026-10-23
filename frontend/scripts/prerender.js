// Prerender (SSR estático): renderiza <App /> a HTML con react-dom/server y lo inyecta
// en build/index.html, para que buscadores y vistas previas vean el contenido sin JS.
// Se ejecuta como "postbuild". No usa navegador, así que corre también en el Docker de producción.
const fs = require('fs');
const os = require('os');
const path = require('path');
const esbuild = require('esbuild');

const root = path.join(__dirname, '..');
const indexPath = path.join(root, 'build', 'index.html');
const tmpBundle = path.join(os.tmpdir(), `yoisar-prerender-${process.pid}.js`);

// Tolerar 'window'/'document' ausentes en node
esbuild.buildSync({
  stdin: {
    contents: `
      import React from 'react';
      import { renderToString } from 'react-dom/server';
      import './src/i18n';
      import App from './src/App';
      export const html = () => renderToString(React.createElement(App));
    `,
    resolveDir: root,
    loader: 'jsx'
  },
  jsx: 'automatic',
  bundle: true,
  platform: 'node',
  format: 'cjs',
  outfile: tmpBundle,
  loader: { '.js': 'jsx', '.css': 'empty', '.woff': 'empty', '.woff2': 'empty' },
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'error'
});

const { html } = require(tmpBundle);
const markup = html();
fs.unlinkSync(tmpBundle);

const page = fs.readFileSync(indexPath, 'utf8');
const rootDiv = /<div id="root">[\s\S]*?<\/div>(\s*<noscript>[\s\S]*?<\/noscript>)?/;
if (!rootDiv.test(page)) {
  throw new Error('prerender: no se encontró <div id="root"> en build/index.html');
}
fs.writeFileSync(indexPath, page.replace(rootDiv, () => `<div id="root">${markup}</div>`));
console.log(`prerender: ${markup.length} bytes de HTML inyectados en build/index.html`);
