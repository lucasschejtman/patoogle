import expat from 'node-expat';

const parser = new expat.Parser('UTF-8')

parser.on('startElement', function (name, attrs) {
  console.log(name, attrs);
});

parser.on('text', function (text) {
  console.log(parser);
});

parser.on('error', function (error) {
  console.error(error);
});

export const run = () => parser.write('<html><head><title id="1">Hello World</title></head><body><p>Foobar</p></body></html>');
