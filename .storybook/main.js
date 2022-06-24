const path = require('path');
const merge = require('webpack-merge').default

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-a11y',
    "@storybook/addon-links",
    '@storybook/addon-postcss',
    "@storybook/addon-essentials",
    '@storybook/addon-storysource',
    'storybook-dark-mode',
    'storybook-color-picker',
    'storybook-addon-designs',
    'storybook-addon-paddings',
    'storybook-addon-breakpoints',
    'storybook-addon-pseudo-states',
    'storybook-addon-measure-viewport',
    '@geometricpanda/storybook-addon-badges',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    }
  ],
  "core": {
    "builder": "webpack5"
  },

  reactOptions: { legacyRootApi: true },

  staticDirs: [path.resolve(__dirname,'../public')],

  webpackFinal: (config) => merge(config, {
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname,'../src/shared/styles')
      }
    }
  })
}
