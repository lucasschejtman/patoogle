import plugins from './server.plugins';
import validateSession from './modules/auth/session.validation';

import { Server } from 'hapi';

const server = new Server({
  debug: process.env.NODE_ENV !== "dev" ? false : { log: ['error'], request: ['received'] }
});

server.connection({ host: 'localhost', port: process.env.PORT || 3000 });
server.register(plugins, (registerErr) => {
    if(registerErr) throw registerErr;

    server.auth.strategy('jwt', 'jwt', true, {
      //TODO: proper key and move to config
      key: '123456',
      validateFunc: validateSession
    });

    server.start((startErr) => {
      if(startErr) throw startErr;

      console.log(`Server running at: ${server.info.uri}`);
    });
  }
);
