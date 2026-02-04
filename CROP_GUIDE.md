# Remove Black Letterbox Bars from Frames

## Problem:
Your PNG frames have black bars on the sides (letterboxing from the original video).

## Solution Options:

### **Option 1: Auto-Crop with Sharp (Recommended)**

**Install sharp:**
```bash
npm install sharp
```

**Run the crop script:**
```bash
node crop_black_bars.js
```

This will:
- ✅ Auto-detect black bars
- ✅ Crop them out automatically
- ✅ Save to `/public/sequence_cropped/`
- ✅ Process all 192 frames

**Then replace files:**
```bash
# Backup original
move public\sequence public\sequence_backup

# Use cropped
move public\sequence_cropped public\sequence
```

---

### **Option 2: Manual Crop with ffmpeg**

If you have ffmpeg installed and your original video:

```bash
# Detect crop dimensions
ffmpeg -i your_video.mp4 -vf cropdetect -f null - 2>&1 | findstr crop=

# This will show something like: crop=1080:720:100:0
# Use that in the next command

# Extract cropped frames
ffmpeg -i your_video.mp4 -vf "crop=1080:720:100:0" public/sequence/frame_%04d.png
```

---

### **Option 3: Quick CSS Fix (Temporary)**

If you want a quick fix while you prepare better frames:

Add to `ScrollyCanvas.tsx`:
```typescript
// In renderFrame function, after drawing:
ctx.fillStyle = '#0a0a0a'; // Match background
// Fill left bar
ctx.fillRect(0, 0, x, ch);
// Fill right bar  
ctx.fillRect(x + (iw * scale), 0, cw, ch);
```

But **Option 1 is best** - it permanently fixes the source images!

---

## After Cropping:

Your images will be wider/taller (no black bars), so they'll fill the screen properly without letterboxing.

Run `node update_frames.js` again if needed to ensure frames.json is correct.
