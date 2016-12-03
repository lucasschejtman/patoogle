import pkg from '../package';
import { doImport } from './importer';

import program from 'commander';

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
