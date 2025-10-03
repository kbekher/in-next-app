const { i18n } = require('./next-i18next.config.js')

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
        hostname: 'd282ut73jdj7fd.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
    loader: 'custom',
    loaderFile: './utils/image-loader.js',
  },
}

module.exports = nextConfig;
