const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const { set } = require('object-path-immutable');

const MAIN_LOCALE = 'en';

const base = path.resolve(process.cwd(), 'src/shared/locales/' + MAIN_LOCALE);

let results = {};

const buildPaths = (path, parent = '') => {
  const dirs = fs.readdirSync(path);

  for (const dir of dirs) {
    if (dir.endsWith('.json')) {
      const translation = fs.readFileSync(path + '/' + dir).toString();

      const mixin = set(
        {},
        (parent ? parent + '.' : '') + dir.replace('.json', ''),
        JSON.parse(translation)
      );

      results = deepmerge(results, mixin);

      continue;
    }

    buildPaths(path + '/' + dir, dir);
  }
};

buildPaths(base);

let content = '';

let names = [];

Object.entries(results).forEach(([key, value]) => {
  const name =
    key.charAt(0).toUpperCase() + key.substring(1) + 'NamespaceStructure';

  names.push(name);

  content += `type ${name} = ${JSON.stringify(results[key])};\n\n`;
});

fs.writeFileSync(
  `./src/shared/types/locale-structure.ts`,

  `
  ${content}

  type LocaleStructure = ${names.join(' & ')}; 
  
  export type {LocaleStructure} `
);
