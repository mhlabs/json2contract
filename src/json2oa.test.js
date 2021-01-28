const path = require('path');
const tested = require('./json2oa');

describe('Generate component', () => {
  test('Generates json', () => {
    const filePath = path.join(__dirname, './testdata/movie.json');
    const schema = tested.toOpenApiComponent(filePath, 'movie');

    expect(schema.movie.type).toBe('object');
    expect(schema.movie.required).toStrictEqual([
      'title',
      'year',
      'score',
      'tags'
    ]);
    expect(schema.movie.properties.title.type).toBe('string');
    expect(schema.movie.properties.title.example).toBe('In cyberspace');
    expect(schema.movie.properties.year.type).toBe('integer');
    expect(schema.movie.properties.year.example).toBe(1955);
    expect(schema.movie.properties.score.type).toBe('number');
    expect(schema.movie.properties.score.example).toBe(8.9);
    expect(schema.movie.properties.tags.type).toBe('array');
    expect(schema.movie.properties.tags.example).toStrictEqual(['a', 'b']);
  });
});

// test with array at top level
// test with array containing objects with objects and arrays within
