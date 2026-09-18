const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..', 'public');
const srcRoot = path.resolve(__dirname, '..', 'src');

const walk = (dir) => {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return fullPath;
  });
};

const rasterPattern = /\.(png|jpe?g)$/i;
const sourcePattern = /\.(tsx?|jsx|css|md|html)$/i;

(async () => {
  const imageFiles = walk(root).filter((file) => rasterPattern.test(file));
  let converted = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of imageFiles) {
    if (file.endsWith('.webp')) continue;

    const outFile = file.replace(rasterPattern, '.webp');
    if (fs.existsSync(outFile)) {
      continue;
    }

    const before = fs.statSync(file).size;
    totalBefore += before;

    await sharp(file).webp({ quality: 82, effort: 5 }).toFile(outFile);

    const after = fs.statSync(outFile).size;
    totalAfter += after;
    converted += 1;
  }

  const sourceFiles = walk(srcRoot).filter((file) => sourcePattern.test(file));
  for (const file of sourceFiles) {
    const original = fs.readFileSync(file, 'utf8');
    const updated = original.replace(/\.(png|jpe?g)(?=(?:["'\)\s]|$))/gi, '.webp');
    if (updated !== original) {
      fs.writeFileSync(file, updated, 'utf8');
    }
  }

  console.log(JSON.stringify({
    converted,
    totalBefore,
    totalAfter,
    reductionPct: totalBefore > 0 ? Number((((totalBefore - totalAfter) / totalBefore) * 100)).toFixed(1) : 0,
  }, null, 2));
})();
