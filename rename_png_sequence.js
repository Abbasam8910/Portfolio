// Rename script for PNG frames
const fs = require('fs');
const path = require('path');

const sequenceDir = path.join(__dirname, 'public', 'sequence');

// Get all files
const files = fs.readdirSync(sequenceDir);

// Rename PNG files to simple format
files.forEach((file, index) => {
    if (file.endsWith('.png')) {
        const newName = `frame_${String(index).padStart(4, '0')}.png`;
        fs.renameSync(
            path.join(sequenceDir, file),
            path.join(sequenceDir, newName)
        );
        console.log(`Renamed: ${file} → ${newName}`);
    }
});

console.log('Done!');
