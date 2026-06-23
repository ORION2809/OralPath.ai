# Scroll-Driven WebP Frame Sequence

This folder contains 192 high-quality WebP frames extracted from the source video for use in a scroll-driven website animation.

## Source

- **Video:** `Microscope_analyzing_tissue_on_s…_202606231644.mp4`
- **Resolution:** 1280×720
- **Frame rate:** 24 fps
- **Duration:** 8 seconds
- **Total frames:** 192 (`frame_0001.webp` → `frame_0192.webp`)
- **Encoding:** WebP, quality 90, lanczos scaling

## FFmpeg command used

```bash
ffmpeg -i "Microscope_analyzing_tissue_on_s…_202606231644.mp4" \
  -vf "fps=24,scale=1280:720:flags=lanczos" \
  -q:v 90 -c:v libwebp -preset picture -an \
  "scroll-frames/frame_%04d.webp"
```

## Usage

### Option 1: Scroll-driven canvas animation (recommended)

See `scroll-animation-example.html` for a complete, production-ready example.

```html
<canvas id="scroll-canvas" width="1280" height="720"></canvas>
<script>
  const canvas = document.getElementById('scroll-canvas');
  const ctx = canvas.getContext('2d');
  const frameCount = 192;
  const frames = [];
  let loaded = 0;

  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = `scroll-frames/frame_${String(i).padStart(4, '0')}.webp`;
    img.onload = () => {
      loaded++;
      if (loaded === frameCount) updateFrame();
    };
    frames.push(img);
  }

  function updateFrame() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);
    const frameIndex = Math.floor(progress * (frameCount - 1));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frames[frameIndex], 0, 0, canvas.width, canvas.height);
  }

  window.addEventListener('scroll', updateFrame);
</script>
```

### Option 2: CSS-only sprite strip (not recommended for 192 frames)

For very short sequences you can combine frames into a single sprite sheet, but with 192 HD frames the file size makes this impractical.

## Performance tips

1. **Preload frames** before showing the animation to avoid stutter.
2. **Lazy-load** frames below the fold if the sequence is large.
3. Use `requestAnimationFrame` when binding to scroll to avoid excessive repaints.
4. Consider a **WebP fallback** to JPEG for browsers without WebP support (all modern browsers support WebP).
5. For mobile, consider reducing resolution or frame count.

## Output details

- Folder size: ~14 MB
- Average frame size: ~50–75 KB
- Naming: zero-padded 4 digits (`frame_0001.webp`)
