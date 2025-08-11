import sharp from 'sharp';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfigurácia
const config = {
  quality: 85,
  maxWidth: 1920,
  maxHeight: 1080,
  format: 'webp', // webp alebo jpeg
  progressive: true
};

// Získanie argumentov z príkazového riadka
const args = process.argv.slice(2);
const formatArg = args.find(arg => arg.startsWith('--format='));
if (formatArg) {
  config.format = formatArg.split('=')[1];
}

console.log('🖼️  === Optimalizácia obrázkov J2Studio ===');
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
      .withMetadata() // Zachová EXIF ale neaplikuje rotáciu
      .resize(config.maxWidth, config.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });

    if (config.format === 'webp') {
      sharpInstance = sharpInstance.webp({
        quality: config.quality,
        effort: 6
      });
    } else if (config.format === 'jpeg') {
      sharpInstance = sharpInstance.jpeg({
        quality: config.quality,
        progressive: config.progressive,
        mozjpeg: true
      });
    }

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

// Funkcia na spracovanie celého priečinka
async function processFolder(inputFolder, outputFolder) {
  const folderName = path.basename(inputFolder);
  console.log(`📁 === ${folderName.toUpperCase()} ===`);

  if (!await fs.pathExists(inputFolder)) {
    console.log(`❌ Priečinok ${inputFolder} neexistuje!`);
    return;
  }

  // Vytvorenie výstupného priečinka
  await fs.ensureDir(outputFolder);
  console.log(`📂 Vytvorený výstupný priečinok: ${outputFolder}`);

  // Získanie všetkých obrázkov
  const files = await fs.readdir(inputFolder);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

  console.log(`🔍 Nájdených ${imageFiles.length} obrázkov`);

  let processed = 0;
  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(inputFolder, file);
    const fileName = path.parse(file).name;
    const outputFile = `${fileName}.${config.format}`;
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

  const totalSavings = Math.round((1 - (totalNewSize / totalOriginalSize)) * 100);
  console.log(`\n📊 Súhrn ${folderName}:`);
  console.log(`   ✅ Spracovaných: ${processed}/${imageFiles.length} obrázkov`);
  console.log(`   💾 Celková úspora: ${totalOriginalSize}KB → ${totalNewSize}KB (${totalSavings}%)`);
  console.log('');
}

// Hlavná funkcia
async function main() {
  const projectRoot = path.dirname(__dirname);
  
  const folders = [
    {
      input: path.join(projectRoot, 'public', 'img', 'kuchyna'),
      output: path.join(projectRoot, 'public', 'img', `kuchyna_optimized_${config.format}`)
    },
    {
      input: path.join(projectRoot, 'public', 'img', 'montaze'),
      output: path.join(projectRoot, 'public', 'img', `montaze_optimized_${config.format}`)
    }
  ];

  console.log('🚀 Začínam optimalizáciu...\n');

  for (const folder of folders) {
    await processFolder(folder.input, folder.output);
  }

  console.log('🎉 === HOTOVO ===');
  console.log('✨ Optimalizované obrázky sú uložené v:');
  folders.forEach(folder => {
    console.log(`   📁 ${folder.output}`);
  });
  console.log('\n💡 Tip: Nahraďte pôvodné obrázky optimalizovanými verziami.');
}

// Spustenie
main().catch(error => {
  console.error('❌ Kritická chyba:', error);
  process.exit(1);
});
