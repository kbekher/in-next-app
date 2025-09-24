const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 90,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd282ut73jdj7fd.cloudfront.net/',
        port: '',
        pathname: '/**', // Allows all images from this hostname
      },
    ],
    loader: 'custom',
    loaderFile: './utils/image-loader.js',
  },
}

module.exports = nextConfig;
