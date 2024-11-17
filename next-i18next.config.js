/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  /** To avoid issues when deploying to some path (vercel...) */
  localePath: 
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
};
