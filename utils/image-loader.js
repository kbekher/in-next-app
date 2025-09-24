import { DOMAIN } from "@/constants";


const ALLOWED_WIDTHS = [256, 384, 640, 828, 1080, 1200];

const imageLoader = ({ src, width }) => {
  console.log('imageLoader input:', { src, width });
  
  // Find the closest allowed width that is >= requested width
  const suitableWidth = ALLOWED_WIDTHS.find(w => w >= width) || ALLOWED_WIDTHS[ALLOWED_WIDTHS.length - 1];

  let imagePath;
  
  // Handle both full URLs and relative paths
  if (src.startsWith('http')) {
    // Full URL - extract pathname
    const url = new URL(src);
    imagePath = url.pathname;
  } else {
    // Relative path - use as is
    imagePath = src.startsWith('/') ? src : `/${src}`;
  }

  // Clean up the path - remove extension and existing size suffix
  // But preserve numbers that are part of the filename (like andere-lab-1)
  const cleanPath = imagePath
    .replace(/\.\w+$/, '') // remove extension (.jpg, .png, etc.)
    .replace(/-(\d{3,4})$/, ''); // remove size suffix (-256, -384, -640, -828, -1080, -1200) but keep other numbers

  // Check if this is a logo (no size extensions available)
  // Logo files are typically in root or have "logo" in the name
  const isNotProject = !cleanPath.includes('projects/');
  
  let finalUrl;
  if (isNotProject) {
    // For logos, return the original path without size suffix
    finalUrl = `${DOMAIN}${cleanPath}.png`; // Assuming logos are PNG
  } else {
    // For project images, add size suffix
    finalUrl = `${DOMAIN}${cleanPath}-${suitableWidth}.jpg`;
  }
  
  console.log('imageLoader output:', finalUrl);
  return finalUrl;
};

export default imageLoader;
