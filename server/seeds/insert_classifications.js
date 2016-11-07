var seeder = require('knex-csv-seeder').default;

exports.seed = seeder({
  table: 'classifications',
  file: './seeds/classifications.csv',
  parser: {
    delimiter: ',',
    quote: '""',
    escape: '\\'
  }
});
