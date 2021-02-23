const fs = require('fs');
const json2oa = require('./src/json2oa');

function fail() {
  console.log('Usage: node index.js openapi [jsonfilepath] [component-name]');
  process.exit(0);
}

if (process.argv.length < 5) {
  fail();
}

const command = process.argv[2];
const filePath = process.argv[3];
const componentName = process.argv[4];

if (command.toLowerCase() !== 'openapi') {
  console.log(`Command "${command}" is not implemented.`);
  fail();
}

if (!fs.existsSync(filePath)) {
  console.log(`File "${filePath}" does not exist.`);
  fail();
}

const result = json2oa.toOpenApiComponent(filePath, componentName);
console.log(JSON.stringify(result, null, 2));
