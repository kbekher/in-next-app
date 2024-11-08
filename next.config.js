const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3bxg96r07nwt6.cloudfront.net',
        port: '',
        pathname: '/hero.png',
      },
      {
        protocol: 'https',
        hostname: 'd3bxg96r07nwt6.cloudfront.net',
        port: '',
        pathname: '/bio.png',
      },
      {
        protocol: 'https',
        hostname: 'd3bxg96r07nwt6.cloudfront.net',
        port: '',
        pathname: '/reviewer1.jpg',
      },
      {
        protocol: 'https',
        hostname: 'd3bxg96r07nwt6.cloudfront.net',
        port: '',
        pathname: '/reviewer2.jpg',
      },
      {
        protocol: 'https',
        hostname: 'd3bxg96r07nwt6.cloudfront.net',
        port: '',
        pathname: '/fl1.jpg',
      },
      {
        protocol: 'https',
        hostname: 'd3bxg96r07nwt6.cloudfront.net',
        port: '',
        pathname: '/fl2.jpg',
      },
      {
        protocol: 'https',
        hostname: 'd3bxg96r07nwt6.cloudfront.net',
        port: '',
        pathname: '/fl3.jpg',
      },
      {
        protocol: 'https',
        hostname: 'd3bxg96r07nwt6.cloudfront.net',
        port: '',
        pathname: '/fl4.jpg',
      },
      {
        protocol: 'https',
        hostname: 'd3bxg96r07nwt6.cloudfront.net',
        port: '',
        pathname: '/fl5.jpg',
      },
      {
        protocol: 'https',
        hostname: 'd3bxg96r07nwt6.cloudfront.net',
        port: '',
        pathname: '/fl6.jpg',
      },
    ],
  },
}

module.exports = nextConfig