import pkg from '../package';

import program from 'commander';

//TODO: Move elsewhere
const doImport = ({ year, month, day, dry }) => {
  console.log(year);
  console.log(month);
  console.log(day);
  console.log(dry);
};

program
  .version(pkg.version)
  .option('-y, --year <year>', 'Year of the bulk to import')
  .option('-m, --month <month>', 'Month of the bulk to import')
  .option('-d, --day <day>', 'Day of the bulk to import')
  .option('--dry', 'Performs an import without side effects')
  .option('--local', 'Determines whether it should download the bulk file or fetch it from the file system');

program
  .command('import')
  .action(() => doImport(program));

program.parse(process.argv);
