const { STAGE_NAME = 'dev' } = process.env;
const fs = require('fs');
const Case = require('case');
const deepmerge = require('deepmerge');

const local = fs.readFileSync('./config/local.json');

const extract = (parent, value, result = '') => {
  if (typeof value == 'object') {
    Object.entries(value).forEach(([key, value]) => {
      result = extract(
        parent + `${parent ? '_' : ''}` + Case.constant(key),
        value,
        result
      );
    });

    return result;
  }

  return result + `${parent}=${value}\n`;
};

const createDotEnv = () => {
  let config = deepmerge(
    JSON.parse(fs.readFileSync(`./config/${STAGE_NAME}.json`)),
    JSON.parse(local)
  );

  let dotenv = extract('', config);

  fs.writeFileSync('./.env', dotenv);
};

createDotEnv();
