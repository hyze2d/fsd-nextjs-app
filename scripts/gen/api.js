const fs = require('fs');

const path = require('path');

const config = require('../../project.config.json');

const prettier = require('prettier');

const { generateApi } = require('swagger-typescript-api');

const outputDir = path.resolve(process.cwd(), `.${config.api.outputDir}`);

const pathToTemplate = path.resolve(
  process.cwd(),

  'node_modules',

  'effector-http-api/codegen-template'
);

const generate = async () => {
  await Promise.all(
    config.api.sdks.map(source =>
      generateApi({
        name: source.fileName,

        output: outputDir,

        url: source.swaggerUrl,

        httpClientType: 'axios',

        generateClient: true,

        templates: pathToTemplate
      })
    )
  );

  fs.writeFileSync(
    outputDir + '/index.ts',
    `
      ${config.api.sdks.map(
        item => `export * from './${item.fileName.replace('.ts', '')}'`
      )}
    `
  );
};

module.exports = { generate };
