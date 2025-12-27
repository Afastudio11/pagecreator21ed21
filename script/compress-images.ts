import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import { resolve } from 'path';

async function compressImages() {
  console.log('Compressing images...');
  
  try {
    const files = await imagemin(['attached_assets/*.{jpg,jpeg,png,JPG,PNG}'], {
      destination: 'attached_assets',
      plugins: [
        imageminMozjpeg({ quality: 75 }),
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
      ],
    });

    console.log('✓ Compressed images:');
    files.forEach((file) => {
      console.log(`  - ${file}`);
    });
  } catch (error) {
    console.error('Error compressing images:', error);
    process.exit(1);
  }
}

compressImages();
