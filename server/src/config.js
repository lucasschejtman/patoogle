/* istanbul ignore next */

import convict from 'convict';

const config = convict({
  server: {
    address: {
      doc: "The IP address to bind the server",
      format: "ipaddress",
      default: "127.0.0.1",
      env: "SERVER_ADDRESS",
    },
    port: {
      doc: "The port to bind the server",
      format: "port",
      default: 3000,
      env: "SERVER_PORT"
    }
  },
  database: {
    user: {
      doc: "The default DB user",
      format: "String",
      default: "postgres",
      env: "DB_USER"
    },
    name: {
      doc: "The database name",
      format: "String",
      default: "patoogle",
      env: "DB_NAME"
    },
    password: {
      doc: "The database password",
      format: "String",
      default: "admin",
      env: "DB_PASSWORD"
    },
    address: {
      doc: "The IP address for the database",
      format: "ipaddress",
      default: "0.0.0.0",
      env: "DB_ADDRESS"
    },
    port: {
      doc: "The port for the database",
      format: "port",
      default: 5432,
      env: "DB_PORT"
    }
  },
  elasticsearch: {
    address: {
      doc: "The IP address for elasticsearch",
      format: "ipaddress",
      default: "0.0.0.0",
      env: "ES_ADDRESS"
    },
    port: {
      doc: "The port for elasticsearch",
      format: "port",
      default: 9200,
      env: "ES_PORT"
    }
  },
  app: {
    env: {
      doc: "The application environment.",
      format: ["production", "dev", "test"],
      default: "dev",
      env: "NODE_ENV"
    },
    jwt: {
      key: {
        doc: "The JWT secret key",
        format: "String",
        default: "123456",
        env: "APP_JWT_KEY"
      },
      exp: {
        doc: "The JWT expiration",
        format: "duration",
        default: "6 months",
        env: "APP_JWT_EXP"
      }
    }
  }
});

export default config;
