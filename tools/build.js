const fs = require('fs');
const path = require('path');

// This project currently uses plain static assets in `www/`.
// CI expects `npm run build` to succeed, so we only validate that `www/index.html` exists.
const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'www', 'index.html');

if (!fs.existsSync(indexPath)) {
  // eslint-disable-next-line no-console
  console.error(`Missing ${indexPath}. Your Capacitor webDir is set to "www".`);
  process.exit(1);
}

// eslint-disable-next-line no-console
console.log(`OK: found ${path.relative(root, indexPath)}`);

