const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'uk']
  },

  localePath: path.resolve('./src/shared/locales')
};
