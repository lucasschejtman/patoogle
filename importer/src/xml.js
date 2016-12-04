import fs from 'fs';
import path from 'path';

export const run = () => {
  var bigXml = require('big-xml');

  var reader = bigXml.createReader(path.join(__dirname, 'ipg160105.xml'), /^(us-patent-grant)$/, { gzip: false });

  reader.on('record', function(record) {
    console.log(record);
  });

  reader.on('error', function(err) {
    console.log(err);
  });
};
