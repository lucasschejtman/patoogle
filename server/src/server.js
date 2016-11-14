/* istanbul ignore next */

import config from './config';
import plugins from './server.plugins';
import validateSession from './modules/auth/session.validation';

import { Server } from 'hapi';

const server = new Server({
  debug: config.get('app.env') !== "dev" ? false : { log: ['error'], request: ['received'] }
});

server.connection({ host: config.get('server.address'), port: config.get('server.port') });
server.register(plugins, (registerErr) => {
    if(registerErr) throw registerErr;

    server.auth.strategy('jwt', 'jwt', true, {
      key: config.get('app.jwt.key'),
      validateFunc: validateSession
    });

    server.start((startErr) => {
      if(startErr) throw startErr;

      console.log(`Server running at: ${server.info.uri}`);
    });
  }
);

export default server;
