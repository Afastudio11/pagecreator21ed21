import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { execSync } from 'child_process';

async function compressImagesAggressive() {
  console.log('Compressing images aggressively...');
  
  try {
    // Aggressive compression for all images
    const files = await imagemin(['attached_assets/*.{jpg,jpeg,png,JPG,PNG}'], {
      destination: 'attached_assets',
      plugins: [
        // JPEG: lower quality (60-65) but still acceptable
        imageminMozjpeg({ quality: 60 }),
        // PNG: very aggressive (0.5-0.65 quality range)
        imageminPngquant({
          quality: [0.5, 0.65],
          speed: 1,
        }),
      ],
    });

    console.log(`✓ Compressed ${files.length} images`);
    
    // List the largest files
    console.log('\n📊 Largest files after compression:');
    execSync('ls -lh attached_assets/*.{jpg,jpeg,png,JPG,PNG} 2>/dev/null | awk \'{print $5, $9}\' | sort -hr | head -15', { stdio: 'inherit' });
    
  } catch (error) {
    console.error('Error compressing images:', error);
    process.exit(1);
  }
}

compressImagesAggressive();
