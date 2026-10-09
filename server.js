import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(root, 'public');
const assetsDir = path.join(root, 'assets');
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function safePath(base, urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const file = path.normalize(path.join(base, decoded.replace(/^\/+/, '')));
  return file.startsWith(base) ? file : null;
}

const server = http.createServer((req, res) => {
  const requested = req.url || '/';
  const base = requested.startsWith('/assets/') ? assetsDir : publicDir;
  const relative = requested.startsWith('/assets/') ? requested.replace(/^\/assets\//, '/') : requested;
  let file = safePath(base, relative);
  if (!file || !fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(publicDir, 'index.html');
  try {
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream', 'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600' });
    fs.createReadStream(file).pipe(res);
  } catch {
    res.writeHead(500); res.end('Server error');
  }
});

server.listen(port, '0.0.0.0', () => console.log(`Facada preview listening on http://0.0.0.0:${port}`));
