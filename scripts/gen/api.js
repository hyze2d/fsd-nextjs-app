const path = require('path');

const { generateApi } = require('swagger-typescript-api');

const fileName = 'api.gen.ts';

const outputDir = path.resolve(process.cwd(), './src/shared/api');

const urlToSwaggerSchema = 'https://api.predic8.de/shop/swagger';

const pathToTemplate = path.resolve(
  process.cwd(),
  'node_modules',
  'effector-http-api/codegen-template'
);

const generate = () => {
  generateApi({
    name: fileName,

    output: outputDir,

    url: urlToSwaggerSchema,

    httpClientType: 'axios',

    generateClient: true,

    templates: pathToTemplate
  });
};

module.exports = { generate };