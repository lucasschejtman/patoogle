import { Server } from 'hapi';

/***** Temporary - Just testing *****/
import db from './core/db';
const User = db.Model.extend({
  tableName: 'users',
  timestamps: true
});
server.route({
  method: 'GET',
  path: '/users',
  handler: (req, rep) => User.fetchAll().then(col => rep(col))
});
/***** Temporary - Just testing *****/

const server = new Server({
  debug: process.env.NODE_ENV !== "dev" ? false : { log: ['error'], request: ['received'] }
});

server.connection({ host: 'localhost', port: 3000 });

server.start((err) => {
  if(err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
