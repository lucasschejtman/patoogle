import fs from 'fs';
import path from 'path';
import libxml from 'libxmljs';

export const run = () => {
  const buffer = fs.readFile(path.join(__dirname, 'one_patent.xml'),{ encoding: 'utf8' }, (err, data) => {
    const xmlDoc = libxml.parseXmlString(data);
    console.log(xmlDoc.root());
  });
};
