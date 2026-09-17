const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicRoot = path.resolve('public');
const sourceRoot = path.resolve('src');
const rasterPattern = /\.(png|jpe?g)$/i;

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(filePath) : [filePath];
  });
}

async function main() {
  const images = walk(publicRoot).filter((filePath) => rasterPattern.test(filePath));
  let originalBytes = 0;
  let webpBytes = 0;

  for (const imagePath of images) {
    const webpPath = imagePath.replace(rasterPattern, '.webp');
    originalBytes += fs.statSync(imagePath).size;
    await sharp(imagePath).webp({ quality: 82, effort: 5 }).toFile(webpPath);
    webpBytes += fs.statSync(webpPath).size;
  }

  const sourceFiles = walk(sourceRoot).filter((filePath) => /\.(tsx?|css|md)$/.test(filePath));
  for (const filePath of sourceFiles) {
    const source = fs.readFileSync(filePath, 'utf8');
    const updated = source.replace(/\.(png|jpe?g)(?=["'\)\s]|$)/gi, '.webp');
    if (updated !== source) fs.writeFileSync(filePath, updated);
  }

  console.log(JSON.stringify({
    converted: images.length,
    originalBytes,
    webpBytes,
    reduction: `${((1 - webpBytes / originalBytes) * 100).toFixed(1)}%`,
  }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});