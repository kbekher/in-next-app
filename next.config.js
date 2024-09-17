const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'inozemtsev-portfolio.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/hero.png',
      },
      {
        protocol: 'https',
        hostname: 'inozemtsev-portfolio.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/bio.png',
      },
    ],
  },
}

module.exports = nextConfig