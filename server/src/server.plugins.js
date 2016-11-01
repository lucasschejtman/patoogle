const swaggerOpts = {
  info: {
    title: 'Pathoo API Documentation'
  },
  schemes: ['http', 'https'],
  tags: [{ name: 'auth' }],
  securityDefinitions: {
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  }
};

const routerOpts = {
  cwd: __dirname,
  routes: './modules/**/*.routes.js'
};

const rolesOpts = {
  roles: ['GUEST', 'FREE', 'PREMIUM', 'ADMIN']
};

const plugins = [
  { register: require('inert') },
  { register: require('vision') },
  { register: require('hapi-auth-jwt2') },
  { register: require('hapi-swagger'), options: swaggerOpts },
  { register: require('hapi-router'), options: routerOpts },
  { register: require('hapi-authorization'), options: rolesOpts }
];

export default plugins;
