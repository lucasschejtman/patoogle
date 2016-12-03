# Server Overview

## Requirements

* [NodeJS v4.0+](https://nodejs.org)

## Installation

`npm install`

## Usage

### Tasks
  * `npm test` - Runs unit tests and on-screen coverage
  * `npm run coverage` - Runs coverage task with the appropiate reporters
  * `npm run dev` - Runs the server and automatically restart on every change
  * `npm run build` - Transpile code
  * The following expect an environment variable `NODE_ENV` set to `dev` or `production`
    * `npm run db:seed:make [seed_name]` - Create a new seed file
    * `npm run db:seed:run` - Run seed files
    * `npm run db:migrate:make [migration_name]` - Create a new migration file
    * `npm run db:migrate:latest` - Update your database to the latest migration
    * `npm run db:migrate:rollback` - Rollback your database one migration

### API
  * `/documentation` - Swagger documentation
