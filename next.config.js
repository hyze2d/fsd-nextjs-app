const merge = require('webpack-merge').default;
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  i18n,

  trailingSlash: true,

  webpack: config =>
    merge(config, {
      resolve: {
        alias: {
          '@styles': '/src/shared/styles'
        }
      }
    })
};
