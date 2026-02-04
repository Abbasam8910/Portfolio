const fs = require('fs');
const path = require('path');

const sequenceDir = path.join(__dirname, 'public', 'sequence');

// Get all PNG files and sort them
const files = fs.readdirSync(sequenceDir)
    .filter(f => f.endsWith('.png'))
    .sort();

console.log(`Found ${files.length} PNG files`);

// Rename to simple format
files.forEach((file, index) => {
    const newName = `frame_${String(index).padStart(4, '0')}.png`;
    const oldPath = path.join(sequenceDir, file);
    const newPath = path.join(sequenceDir, newName);

    if (oldPath !== newPath) {
        fs.renameSync(oldPath, newPath);
        console.log(`✓ ${file} → ${newName}`);
    }
});

// Generate frames.json
const framesList = files.map((_, index) =>
    `frame_${String(index).padStart(4, '0')}.png`
);

const framesJsonPath = path.join(__dirname, 'src', 'components', 'frames.json');
fs.writeFileSync(framesJsonPath, JSON.stringify(framesList, null, 2));

console.log(`\n✅ Done! Renamed ${files.length} frames and updated frames.json`);
console.log(`📊 Total frames: ${files.length}`);
