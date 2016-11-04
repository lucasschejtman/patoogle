# Server Overview

## Requirements

* [NodeJS v4.0+](https://nodejs.org)

## Installation

`npm install`

## Usage

### Tasks
  * `npm run dev` - Runs the server and automatically restart on every change
  * `npm run build` - Transpile code
  * The following expect an environment variable `NODE_ENV` set to `dev`
    * `npm run db:migrate:make [migration_name]` - Create a new migration file
    * `npm run db:migrate:latest` - Update your database to the latest migration
    * `npm run db:migrate:rollback` - Rollback your database one migration

### API
  * `/documentation` - Swagger documentation
