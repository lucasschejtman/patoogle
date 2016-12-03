/* istanbul ignore next */

import config from '../config';

import Knex from 'knex';
import Bookshelf from 'bookshelf';

const knex = new Knex({
  client: 'pg',
  connection: {
    host: config.get('database.address'),
    user: config.get('database.user'),
    password: config.get('database.password'),
    database: config.get('database.name'),
    charset: 'utf-8'
  },
  debug: config.get('app.env') === "dev"
});

const bookshelf = new Bookshelf(knex);

// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Model-Registry
bookshelf.plugin('registry');
// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Pagination
bookshelf.plugin('pagination');
// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Visibility
bookshelf.plugin('visibility');

export default bookshelf;
