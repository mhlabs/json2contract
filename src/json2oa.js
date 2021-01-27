const fs = require('fs');

function toOpenApiComponent(filePath, componentName) {
  const json = fs.readFileSync(filePath);
  const data = JSON.parse(json);

  const schemaProperties = Object.keys(data).map((key) => key);

  const schema = {
    [componentName]: {
      type: 'object',
      required: schemaProperties
    }
  };

  // console.log(schema);

  return schema;
}

module.exports = {
  toOpenApiComponent
};
