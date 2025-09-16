import sharp from 'sharp';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfigurácia pre galériu
const config = {
  quality: 65,
  maxWidth: 1920,
  maxHeight: 1080,
  format: 'webp',
  progressive: true
};

console.log('🖼️  === Optimalizácia galerie J2Studio ===');
console.log(`📊 Kvalita: ${config.quality}%`);
console.log(`📐 Max rozmery: ${config.maxWidth}x${config.maxHeight}px`);
console.log(`🎨 Formát: ${config.format.toUpperCase()}`);
console.log('');

// Funkcia na optimalizáciu jednotlivého obrázka
async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = await fs.stat(inputPath);
    const originalSize = Math.round(stats.size / 1024);

    let sharpInstance = sharp(inputPath, { 
        failOnError: false,
        limitInputPixels: false
      })
      .rotate() // Automaticky aplikuje EXIF rotáciu
      .resize(config.maxWidth, config.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });

    sharpInstance = sharpInstance.webp({
      quality: config.quality,
      effort: 6
    });

    await sharpInstance.toFile(outputPath);

    const newStats = await fs.stat(outputPath);
    const newSize = Math.round(newStats.size / 1024);
    const savings = Math.round((1 - (newSize / originalSize)) * 100);

    return {
      success: true,
      originalSize,
      newSize,
      savings
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// Funkcia na rekurzívne spracovanie priečinka
async function processFolder(inputFolder, outputFolder) {
  const folderName = path.basename(inputFolder);
  console.log(`📁 === ${folderName.toUpperCase()} ===`);

  if (!await fs.pathExists(inputFolder)) {
    console.log(`❌ Priečinok ${inputFolder} neexistuje!`);
    return { processed: 0, totalOriginalSize: 0, totalNewSize: 0 };
  }

  // Vytvorenie výstupného priečinka
  await fs.ensureDir(outputFolder);
  console.log(`📂 Spracovávam priečinok: ${inputFolder}`);

  // Získanie všetkých súborov
  const files = await fs.readdir(inputFolder);
  
  let processed = 0;
  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const file of files) {
    const inputPath = path.join(inputFolder, file);
    const stats = await fs.stat(inputPath);

    if (stats.isDirectory()) {
      // Rekurzívne spracovanie podpriečinkov
      const subOutputFolder = path.join(outputFolder, file);
      const subResult = await processFolder(inputPath, subOutputFolder);
      processed += subResult.processed;
      totalOriginalSize += subResult.totalOriginalSize;
      totalNewSize += subResult.totalNewSize;
    } else {
      // Spracovanie obrázkov
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const fileName = path.parse(file).name;
        const outputFile = `${fileName}.webp`;
        const outputPath = path.join(outputFolder, outputFile);

        process.stdout.write(`⏳ Spracovávam: ${file} ... `);

        const result = await optimizeImage(inputPath, outputPath);

        if (result.success) {
          totalOriginalSize += result.originalSize;
          totalNewSize += result.newSize;
          processed++;
          
          console.log(`✅ ${result.originalSize}KB → ${result.newSize}KB (${result.savings}% úspora)`);
        } else {
          console.log(`❌ Chyba: ${result.error}`);
        }
      }
    }
  }

  if (processed > 0) {
    const totalSavings = Math.round((1 - (totalNewSize / totalOriginalSize)) * 100);
    console.log(`\n📊 Súhrn ${folderName}:`);
    console.log(`   ✅ Spracovaných: ${processed} obrázkov`);
    console.log(`   💾 Celková úspora: ${totalOriginalSize}KB → ${totalNewSize}KB (${totalSavings}%)`);
    console.log('');
  }

  return { processed, totalOriginalSize, totalNewSize };
}

// Hlavná funkcia
async function main() {
  const projectRoot = path.dirname(__dirname);
  
  const galeriaFolder = {
    input: path.join(projectRoot, 'public', 'galeria'),
    output: path.join(projectRoot, 'public', 'galeria_optimized_webp')
  };

  console.log('🚀 Začínam optimalizáciu galérie...\n');

  const result = await processFolder(galeriaFolder.input, galeriaFolder.output);

  if (result.processed > 0) {
    const totalSavings = Math.round((1 - (result.totalNewSize / result.totalOriginalSize)) * 100);
    console.log('🎉 === HOTOVO ===');
    console.log(`✨ Celkovo spracovaných: ${result.processed} obrázkov`);
    console.log(`💾 Celková úspora: ${result.totalOriginalSize}KB → ${result.totalNewSize}KB (${totalSavings}%)`);
    console.log(`📁 Optimalizované obrázky sú v: ${galeriaFolder.output}`);
    console.log('\n💡 Tip: Nahraďte pôvodné obrázky optimalizovanými verziami.');
  } else {
    console.log('⚠️  Žiadne obrázky neboli spracované.');
  }
}

// Spustenie
main().catch(error => {
  console.error('❌ Kritická chyba:', error);
  process.exit(1);
});