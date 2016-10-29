// Object keys need to match process.env.NODE_ENV

module.exports = {
  dev: {
    client: 'pg',
    connection: {
      host: '0.0.0.0',
      database: 'patoogle',
      user:     'postgres',
      password: 'admin'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
