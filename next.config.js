const { i18n } = require('./next-i18next.config.js')
const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd282ut73jdj7fd.cloudfront.net/',
        port: '',
        pathname: '/**', // Allows all images from this hostname
      },
    ],
  },
}

module.exports = withVideos(nextConfig);
