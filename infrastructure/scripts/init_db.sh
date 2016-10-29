#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE USER patoogle;
  CREATE DATABASE patoogle;
  GRANT ALL PRIVILEGES ON DATABASE patoogle TO patoogle;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d patoogle -c 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
