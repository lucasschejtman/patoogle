const swaggerOpts = {
  info: {
    title: 'Pathoo API Documentation'
  },
  schemes: ['http', 'https'],
  tags: [{ name: 'auth' }]
};

const routerOpts = {
  cwd: __dirname,
  routes: './modules/**/*.routes.js'
};

const plugins = [
  { register: require('inert') },
  { register: require('vision') },
  { register: require('hapi-auth-jwt2') },
  { register: require('hapi-swagger'), options: swaggerOpts },
  { register: require('hapi-router'), options: routerOpts }
];

export default plugins;
