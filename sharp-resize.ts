import sharp = require('sharp');
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const sourceImage = fs.readFileSync(path.join(__dirname, 'source.png'));
  const resizedImage = await sharp(sourceImage).resize(200).toBuffer();
  fs.writeFileSync(path.join(__dirname, 'out.png'), resizedImage);
}

main();
