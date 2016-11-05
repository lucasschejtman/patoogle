import { get, create, update, destroy } from './company.controller';
import companySchema from './company.schema';
import Roles from '../../enums/roles.enum';

const routes = [
  {
    method: 'GET',
    path: '/company/{name}',
    config: {
      auth: false,
      tags: ['api', 'company'],
      description: `Access level: ${Roles.GUEST}`,
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
      description: `Access level: ${Roles.ADMIN}`,
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
  },
  {
    method: 'PUT',
    path: '/company',
    config: {
      tags: ['api', 'company'],
      description: `Access level: ${Roles.ADMIN}`,
      plugins: {
        hapiAuthorization: { roles: [Roles.ADMIN] }
      },
      validate: {
        payload: companySchema.update.request
      },
      response: {
        status: {
          201: companySchema.update.response.valid
        }
      }
    },
    handler: update
  },
  {
    method: 'DELETE',
    path: '/company',
    config: {
      tags: ['api', 'company'],
      description: `Access level: ${Roles.ADMIN}`,
      plugins: {
        hapiAuthorization: { roles: [Roles.ADMIN] }
      },
      validate: {
        payload: companySchema.destroy.request
      },
      response: {
        status: {
          200: companySchema.destroy.response.valid
        }
      }
    },
    handler: destroy
  }
];

export default routes;
