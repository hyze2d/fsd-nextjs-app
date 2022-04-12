const merge = require('webpack-merge').default;
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  i18n,

  trailingSlash: true,

  webpack: config => {
    /**
     * Add css|scss.modules camelCase props after importing in js
     */
    // Find the array of "style rules" in the webpack config.
    // This is the array of webpack rules that:
    // - is inside a 'oneOf' block
    // - contains a rule that matches 'file.css'
    [
      (
        config.module.rules.find(
          m => m.oneOf && m.oneOf.find(({ test: reg }) => reg.test('file.css'))
        ) || {}
      ).oneOf
    ]
      .filter(Boolean)
      .forEach(styleRules => {
        // Find all the webpack rules that handle CSS modules
        // Look for rules that match '.module.css' and '.module.scss' but aren't being used to generate
        // error messages.
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
          // remove 'undefined' values

          // Add the 'localsConvention' config option to the CSS loader config in each of these rules.
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
          '@styles': '/src/shared/styles'
        }
      }
    });
  }
};
