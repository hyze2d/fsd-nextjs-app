const merge = require('webpack-merge').default;
const nextTranslate = require('next-translate')
const { apiUrl } =
  process.env.NODE_ENV == 'production' ? process.env : require('./config.json');
const i18n = require('./i18n.json');


/** @type {import('next').NextConfig} */
module.exports = nextTranslate({
  reactStrictMode: true,

  trailingSlash: true,

  i18n: {
    locales: ['default', ...i18n.locales],
    
    defaultLocale: 'default',
  },

  publicRuntimeConfig: {
    apiUrl
  },

  webpack: (config, { isServer }) => {
    [
      (
        config.module.rules.find(
          m => m.oneOf && m.oneOf.find(({ test: reg }) => reg.test('file.css'))
        ) || {}
      ).oneOf
    ]
      .filter(Boolean)
      .forEach(styleRules => {
        [
          styleRules.find(
            ({ test: reg, use }) =>
              reg.test('file.module.css') && use.loader !== 'error-loader'
          ),
          styleRules.find(
            ({ test: reg, use }) =>
              reg.test('file.module.scss') && use.loader !== 'error-loader'
          )
        ]
          .filter(Boolean)

          .forEach(cmr => {
            // Find the item inside the 'use' list that defines css-loader
            const cssLoaderConfig = cmr.use.find(({ loader }) =>
              loader.includes('css-loader')
            );

            if (!(cssLoaderConfig && cssLoaderConfig.options)) return;

            cssLoaderConfig.options.modules.exportLocalsConvention =
              'camelCase';
          });
      });

    return merge(config, {
      resolve: {
        alias: {
          '@styles': '/src/styles'
        }
      }
    });
  }
});
