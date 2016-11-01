const plugins = [
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
];

export default plugins;
