const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');
const files = fs.readdirSync(assetsDir);

async function optimizeImages() {
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const filePath = path.join(assetsDir, file);
      const parsedPath = path.parse(filePath);
      const destPath = path.join(assetsDir, `${parsedPath.name}.webp`);
      
      console.log(`Optimizing ${file}...`);
      await sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(destPath);
      console.log(`Created ${parsedPath.name}.webp`);
    }
  }
}

optimizeImages().catch(console.error);
