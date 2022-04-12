module.exports = {
  i18n: {
    locales: ['default', 'en', 'uk'],
    defaultLocale: 'default',
    localeDetection: true
  },

  reloadOnPrerender: process.env.NODE_ENV !== 'production'
};
