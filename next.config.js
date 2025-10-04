const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    deviceSizes: [256, 384, 640, 828, 1080, 1200],
    imageSizes: [256, 384, 640, 828, 1080, 1200],
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 90, // 90 days
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
  // Add headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year for static assets
          },
        ],
      },
      {
        source: '/projects/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year for project images
          },
        ],
      },
      {
        source: '/site.webmanifest',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400', // 1 day for manifest
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig;
