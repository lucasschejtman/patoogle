import { get } from './company.controller';

import Joi from 'joi';

const routes = [
  {
    method: 'GET',
    path: '/company/{name}',
    config: {
      tags: ['api', 'company'],
      plugins: {
        hapiAuthorization: { roles: ['GUEST'] }
      },
      validate: {
        params: {
          name: Joi.string()
        }
      }
    },
    handler: get
  }
];

export default routes;
