import { Server } from 'hapi';

const server = new Server({
  debug: process.env.NODE_ENV !== "dev" ? false : { log: ['error'], request: ['received'] }
});

server.connection({ host: 'localhost', port: 3000 });

server.route({
  method: 'GET',
  path: '/ping',
  handler: (req, rep) => rep('pong')
});

server.start((err) => {
  if(err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
