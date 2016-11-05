import { Client } from 'elasticsearch';

const client = new Client({
  // TODO: Move to config
  host: 'localhost:9200',
  log: 'trace'
});

export default client;
