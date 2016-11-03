import { get, create } from './company.controller';
import companySchema from './company.schema';
import Roles from '../../enums/roles.enum';

const routes = [
  {
    method: 'GET',
    path: '/company/{name}',
    config: {
      tags: ['api', 'company'],
      plugins: {
        hapiAuthorization: { roles: [Roles.GUEST] }
      },
      validate: {
        params: companySchema.get.request
      },
      response: {
        status: {
          200: companySchema.get.response.valid
        }
      }
    },
    handler: get
  },
  {
    method: 'POST',
    path: '/company',
    config: {
      tags: ['api', 'company'],
      plugins: {
        hapiAuthorization: { roles: [Roles.ADMIN] }
      },
      validate: {
        payload: companySchema.create.request
      },
      response: {
        status: {
          202: companySchema.create.response.valid
        }
      }
    },
    handler: create
  }
];

export default routes;
