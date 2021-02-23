const fs = require('fs');

function getOpenApiType(val) {
  if (!val) return 'undefined';

  if (Array.isArray(val)) return 'array';

  const type = typeof val;

  if (type === 'number' && Number.isInteger(val)) return 'integer';

  return type;
}

function toOpenApiComponent(filePath, componentName) {
  const json = fs.readFileSync(filePath);
  const data = JSON.parse(json);

  const schemaProperties = Object.keys(data).map((key) => key);

  const schema = {
    [componentName]: {
      type: 'object',
      required: schemaProperties,
      properties: {}
    }
  };

  schemaProperties.forEach((p) => {
    schema[componentName].properties[p] = {
      type: getOpenApiType(data[p]),
      example: data[p]
    };
  });

  return schema;
}

module.exports = {
  toOpenApiComponent
};
