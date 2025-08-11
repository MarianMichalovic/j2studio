import sharp from 'sharp';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔄 === Oprava orientácie obrázkov ===');
console.log('📐 Automaticky opravuje EXIF orientáciu bez zmeny kvality');
console.log('');

// Funkcia na opravu orientácie jednotlivého obrázka
async function fixOrientation(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    
    // Kontrola či má obrázok EXIF orientáciu
    if (!metadata.orientation || metadata.orientation === 1) {
      return {
        success: true,
        fixed: false,
        message: 'Orientácia správna'
      };
    }

    // Oprava orientácie s vysokou kvalitou
    await sharp(inputPath)
      .rotate() // Automaticky opraví orientáciu
      .jpeg({ quality: 95, progressive: true }) // Vysoká kvalita pre opravu
      .toFile(outputPath);

    return {
      success: true,
      fixed: true,
      orientation: metadata.orientation,
      message: `Opravená orientácia ${metadata.orientation}`
    };
  } catch (error) {
    return {
      success: false,
      fixed: false,
      error: error.message
    };
  }
}

// Funkcia na spracovanie celého priečinka
async function fixFolderOrientation(inputFolder, outputFolder) {
  const folderName = path.basename(inputFolder);
  console.log(`📁 === ${folderName.toUpperCase()} ===`);

  if (!await fs.pathExists(inputFolder)) {
    console.log(`❌ Priečinok ${inputFolder} neexistuje!`);
    return;
  }

  // Vytvorenie výstupného priečinka
  await fs.ensureDir(outputFolder);
  console.log(`📂 Výstupný priečinok: ${outputFolder}`);

  // Získanie všetkých obrázkov
  const files = await fs.readdir(inputFolder);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg'].includes(ext);
  });

  console.log(`🔍 Nájdených ${imageFiles.length} JPEG obrázkov`);

  let processed = 0;
  let fixed = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, file);

    process.stdout.write(`🔄 Kontrolujem: ${file} ... `);

    const result = await fixOrientation(inputPath, outputPath);

    if (result.success) {
      if (result.fixed) {
        console.log(`✅ ${result.message}`);
        fixed++;
      } else {
        console.log(`⚪ ${result.message}`);
        // Skopíruj pôvodný súbor ak nie je potrebná oprava
        await fs.copy(inputPath, outputPath);
      }
      processed++;
    } else {
      console.log(`❌ Chyba: ${result.error}`);
    }
  }

  console.log(`\n📊 Súhrn ${folderName}:`);
  console.log(`   ✅ Spracovaných: ${processed}/${imageFiles.length} obrázkov`);
  console.log(`   🔄 Opravených orientácií: ${fixed} obrázkov`);
  console.log('');
}

// Hlavná funkcia
async function main() {
  const projectRoot = path.dirname(__dirname);
  
  const folders = [
    {
      input: path.join(projectRoot, 'public', 'img', 'kuchyna'),
      output: path.join(projectRoot, 'public', 'img', 'kuchyna_fixed_orientation')
    },
    {
      input: path.join(projectRoot, 'public', 'img', 'montaze'),
      output: path.join(projectRoot, 'public', 'img', 'montaze_fixed_orientation')
    }
  ];

  console.log('🚀 Začínam opravu orientácie...\n');

  for (const folder of folders) {
    await fixFolderOrientation(folder.input, folder.output);
  }

  console.log('🎉 === HOTOVO ===');
  console.log('✨ Obrázky s opravenou orientáciou sú uložené v:');
  folders.forEach(folder => {
    console.log(`   📁 ${folder.output}`);
  });
  console.log('\n💡 Tip: Teraz môžete spustiť optimalizáciu na opravené obrázky.');
  console.log('💡 Alebo použite nový skript optimize-images.js ktorý už má opravu orientácie.');
}

// Spustenie
main().catch(error => {
  console.error('❌ Kritická chyba:', error);
  process.exit(1);
});
