import validateSession from './modules/auth/session.validation';

import { Server } from 'hapi';
import Inert from 'inert';
import Vision from 'vision';
import HapiSwagger from 'hapi-swagger';

const server = new Server({
  debug: process.env.NODE_ENV !== "dev" ? false : { log: ['error'], request: ['received'] }
});

server.connection({ host: 'localhost', port: process.env.PORT || 3000 });

server.register([
    require('inert'),
    require('vision'),
    require('hapi-auth-jwt2'),
    {
      register: require('hapi-swagger'),
      options: {
        info: {
          title: 'Pathoo API Documentation'
        },
        schemes: ['http', 'https'],
        tags: [{ name: 'auth' }]
      }
    },
    {
      register: require('hapi-router'),
      options: {
        cwd: __dirname,
        routes: './modules/**/*.routes.js'
      }
    }
  ], (err) => {
    server.auth.strategy('jwt', 'jwt', true, {
      //TODO: proper key and move to config
      key: '123456',
      validateFunc: validateSession
    });

    server.start((startError) => {
      if(startError) {
        throw err;
      }

      console.log(`Server running at: ${server.info.uri}`);
    });
  }
);
