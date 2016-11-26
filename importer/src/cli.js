import pkg from '../package';

import program from 'commander';

program
  .version(pkg.version)
  .option('-d, --dry', 'Performs an import without side effects');

program
  .command('import [year] [week]')
  .action((year, week) => {
    console.log(year);
    console.log(week);
  });

program.parse(process.argv);
