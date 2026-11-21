const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const web = path.join(root, 'www');
fs.mkdirSync(web, { recursive: true });

for (const file of ['index.html', 'persona.js']) {
  const source = path.join(root, file);
  if (!fs.existsSync(source)) {
    console.error(`Missing required web source: ${file}`);
    process.exit(1);
  }
  fs.copyFileSync(source, path.join(web, file));
}
console.log('DearMe web assets copied to www/.');
