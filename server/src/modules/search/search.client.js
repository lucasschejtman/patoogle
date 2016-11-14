/* istanbul ignore next */

import config from '../../config';

import { Client } from 'elasticsearch';

const client = new Client({
  host: `${config.get('elasticsearch.address')}:${config.get('elasticsearch.port')}`,
  log: 'trace'
});

export default client;
