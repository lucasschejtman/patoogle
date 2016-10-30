import authRoutes from './modules/auth/auth.controller';
import validateSession from './modules/auth/session.validation';

import { Server } from 'hapi';

const server = new Server({
  debug: process.env.NODE_ENV !== "dev" ? false : { log: ['error'], request: ['received'] }
});

server.connection({ host: 'localhost', port: 3000 });

server.register(require('hapi-auth-jwt2'));

server.auth.strategy('jwt', 'jwt', true, {
  //TODO: proper key and move to config
  key: '123456',
  validateFunc: validateSession
});

//TODO: dynamic routes
server.route(authRoutes);

server.start((err) => {
  if(err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
