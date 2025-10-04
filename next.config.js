const { i18n } = require('./next-i18next.config.js')

// Get CDN domain from environment variables
const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN;

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    deviceSizes: [256, 384, 640, 828, 1080, 1200],
    imageSizes: [256, 384, 640, 828, 1080, 1200],
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 90,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: cdnDomain,
        port: '',
        pathname: '/**',
      },
    ],
    loader: 'custom',
    loaderFile: './utils/image-loader.js',
  },
}

module.exports = nextConfig;
