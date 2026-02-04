/**
 * AUTO-CROP BLACK BARS FROM PNG FRAMES
 * 
 * This script removes letterbox black bars from images
 * Works with Node.js using sharp library
 * 
 * Installation: npm install sharp
 * Usage: node crop_black_bars.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sequenceDir = path.join(__dirname, 'public', 'sequence');
const outputDir = path.join(__dirname, 'public', 'sequence_cropped');

// Create output directory
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function cropImage(inputPath, outputPath) {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Auto-detect content bounds (removes black bars)
        await image
            .trim({
                background: '#000000', // Black color to trim
                threshold: 10          // Tolerance for slight variations
            })
            .toFile(outputPath);

        return true;
    } catch (error) {
        console.error(`Error processing ${path.basename(inputPath)}:`, error.message);
        return false;
    }
}

async function processAllFrames() {
    const files = fs.readdirSync(sequenceDir)
        .filter(f => f.endsWith('.png'))
        .sort();

    console.log(`📸 Found ${files.length} PNG frames`);
    console.log('🔧 Cropping black bars...\n');

    let processed = 0;

    for (const file of files) {
        const inputPath = path.join(sequenceDir, file);
        const outputPath = path.join(outputDir, file);

        const success = await cropImage(inputPath, outputPath);
        if (success) {
            processed++;
            process.stdout.write(`\r✓ Processed: ${processed}/${files.length}`);
        }
    }

    console.log('\n\n✅ Done! Cropped frames saved to /public/sequence_cropped/');
    console.log('📝 Next steps:');
    console.log('   1. Check quality in /sequence_cropped/');
    console.log('   2. If good, replace /sequence/ with /sequence_cropped/ files');
    console.log('   3. Delete old /sequence/ folder');
}

// Check if sharp is installed
try {
    require.resolve('sharp');
    processAllFrames();
} catch (e) {
    console.error('❌ Error: sharp library not found!');
    console.log('\n📦 Install it first:');
    console.log('   npm install sharp');
    console.log('\nThen run this script again.');
    process.exit(1);
}
