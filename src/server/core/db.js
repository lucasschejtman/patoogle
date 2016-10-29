import Knex from 'knex';
import Bookshelf from 'bookshelf';

const knex = new Knex({
  client: 'pg',
  //TODO: configuration management
  connection: {
    host: '0.0.0.0',
    user: 'postgres',
    password: 'admin',
    database: 'patoogle',
    charset: 'utf-8'
  },
  debug: process.env.NODE_ENV === "dev"
});

const bookshelf = new Bookshelf(knex);

//https://github.com/tgriesser/bookshelf/wiki/Plugin:-Pagination
bookshelf.plugin('pagination');
// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Visibility
bookshelf.plugin('visibility');

export default bookshelf;
