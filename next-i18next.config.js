const path = require('path');
const BASED_LOCALE = 'en';

module.exports = {
  i18n: {
    defaultLocale: BASED_LOCALE,
    defaultNS: 'common',
    locales: ['en', 'ru', 'uk']
  },

  localePath: path.resolve('./src/shared/locales')
};
