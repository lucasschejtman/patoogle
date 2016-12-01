import fs from 'fs';
import path from 'path';
import xmlStream from 'xml-stream';

const elName = 'us-bibliographic-data-grant';

const pauser = xml => {
  xml.pause();
  setTimeout(() => xml.resume(), 1000);
};

export const run = () => {
  const stream = fs.createReadStream(path.join(__dirname, 'ipg160105.xml'));
  const xml = new xmlStream(stream);

  xml.collect(elName);
  xml.on(`endElement: ${elName}`, (element) => {
      console.log(element);
      pauser(xml);
  });
  xml.on('error', function(){});
};
