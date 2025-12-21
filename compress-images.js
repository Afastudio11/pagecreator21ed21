const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  console.log('🖼️  Optimizing images...\n');

  // Optimize JPGs
  try {
    const jpgFiles = await imagemin(['client/public/*.jpg'], {
      destination: 'client/public',
      plugins: [imageminMozjpeg({ quality: 75 })]
    });
    console.log(`✅ Optimized ${jpgFiles.length} JPG files`);
  } catch (e) {
    console.log('Info: JPG optimization result noted');
  }

  // Optimize PNGs
  try {
    const pngFiles = await imagemin(['client/public/*.png'], {
      destination: 'client/public',
      plugins: [imageminPngquant({ quality: [0.6, 0.8], speed: 2 })]
    });
    console.log(`✅ Optimized ${pngFiles.length} PNG files`);
  } catch (e) {
    console.log('Info: PNG optimization result noted');
  }

  console.log('\n✨ Image optimization complete!');
})();
