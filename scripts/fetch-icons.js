#!/usr/bin/env node
// Downloads SimpleIcons SVGs into src/assets/icons
// Run with: npm run fetch-icons
import fs from 'fs/promises';
import path from 'path';

const outDir = path.resolve(process.cwd(), 'src', 'assets', 'icons');
const icons = {
  'html5': 'https://cdn.simpleicons.org/html5/000000',
  // 'css3': intentionally omitted; custom SVG maintained in src/assets/icons/css3.svg
  'javascript': 'https://cdn.simpleicons.org/javascript/000000',
  'react': 'https://cdn.simpleicons.org/react/000000',
  'nodejs': 'https://cdn.simpleicons.org/node.js/000000',
  'express': 'https://cdn.simpleicons.org/express/000000',
  'astro': 'https://cdn.simpleicons.org/astro/000000',
  'tailwindcss': 'https://cdn.simpleicons.org/tailwindcss/000000',
  'git': 'https://cdn.simpleicons.org/git/000000',
  // 'visualstudiocode': intentionally omitted; add local file in src/assets/icons/visualstudiocode.svg
  'npm': 'https://cdn.simpleicons.org/npm/000000',
  'postgresql': 'https://cdn.simpleicons.org/postgresql/000000',
};

async function run() {
  await fs.mkdir(outDir, { recursive: true });
  for (const [name, url] of Object.entries(icons)) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
      const text = await res.text();
      // Ensure svg has width/height attributes for consistent sizing
      const fixed = text.replace('<svg', '<svg width="64" height="64"');
      const file = path.join(outDir, `${name}.svg`);
      await fs.writeFile(file, fixed, 'utf8');
      console.log(`Saved ${file}`);
    } catch (err) {
      console.error(`Error fetching ${name}:`, err.message || err);
    }
  }
}

run().catch((err) => { console.error(err); process.exit(1); });
