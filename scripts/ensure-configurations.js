const fs = require('fs');

const configurations = fs.readdirSync('./config');

const missing = ['dev.json', 'local.json'].filter(item =>
  configurations.every(one => one != item)
);

for (let path of missing) {
  fs.writeFileSync('./config/' + path, '{}');
}
