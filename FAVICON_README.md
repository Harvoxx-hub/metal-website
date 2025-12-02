# Favicon Setup Instructions

To complete the SEO optimization, you need to create the following favicon files from your logo:

## Required Favicon Files

Place these files in the `/public` directory:

1. **favicon.ico** - 16x16, 32x32, 48x48 (multi-size ICO file)
2. **favicon-16x16.png** - 16x16 pixels
3. **favicon-32x32.png** - 32x32 pixels
4. **apple-touch-icon.png** - 180x180 pixels (for iOS devices)
5. **android-chrome-192x192.png** - 192x192 pixels (for Android)
6. **android-chrome-512x512.png** - 512x512 pixels (for Android)
7. **safari-pinned-tab.svg** - SVG format (for Safari pinned tabs)

## How to Generate Favicons

You can use online tools to generate all favicon sizes from your logo:

1. **Favicon Generator**: https://realfavicongenerator.net/
   - Upload your logo image
   - It will generate all required sizes and formats
   - Download and place files in `/public` directory

2. **Alternative**: https://favicon.io/
   - Upload your logo
   - Generate all favicon formats

## Quick Setup

1. Take your logo from `/public/images/logo/logo.png`
2. Use a favicon generator tool (recommended: realfavicongenerator.net)
3. Download all generated files
4. Place them in the `/public` directory
5. The site will automatically use them

## Note

The SEO metadata is already configured in `app/layout.tsx` and will work once you add the favicon files.

