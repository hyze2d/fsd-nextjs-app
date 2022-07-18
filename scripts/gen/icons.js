const path = require('path');

const { generateSVG } = require('react-svg-codegen');

const resolve = (...segments) => path.resolve(__dirname, '../..', ...segments);

const generate = (watch = false) =>
  generateSVG({
    watch,
    storybook: true,
    output: 'index.tsx',
    iconsFolder: resolve('src/shared/ui/icons'),
    templateFolder: resolve('node_modules', 'react-svg-codegen/templates'),
  });

module.exports = { generate };

