import { get, create, update, destroy, match } from './patent.controller';
import patentSchema from './patent.schema';
import Roles from '../../enums/roles.enum';

const routes = [
  {
    method: 'GET',
    path: '/patent/{id}',
    config: {
      auth: false,
      tags: ['api', 'patent'],
      description: `Access level: ${Roles.GUEST}`,
      validate: {
        params: patentSchema.get.request
      },
      response: {
        status: {
          200: patentSchema.get.response.valid
        }
      }
    },
    handler: get
  },
  {
    method: 'POST',
    path: '/patent',
    config: {
      tags: ['api', 'patent'],
      description: `Access level: ${Roles.ADMIN}`,
      plugins: {
        hapiAuthorization: { roles: [Roles.ADMIN] }
      },
      validate: {
        payload: patentSchema.create.request
      },
      response: {
        status: {
          202: patentSchema.create.response.valid
        }
      }
    },
    handler: create
  },
  {
    method: 'PUT',
    path: '/patent',
    config: {
      tags: ['api', 'patent'],
      description: `Access level: ${Roles.ADMIN}`,
      plugins: {
        hapiAuthorization: { roles: [Roles.ADMIN] }
      },
      validate: {
        payload: patentSchema.update.request
      },
      response: {
        status: {
          204: patentSchema.update.response.valid
        }
      }
    },
    handler: update
  },
  {
    method: 'PUT',
    path: '/patent/{id}/match',
    config: {
      tags: ['api', 'patent'],
      description: `Access level: ${Roles.ADMIN}`,
      plugins: {
        hapiAuthorization: { roles: [Roles.ADMIN] }
      },
      validate: patentSchema.match.request,
      response: {
        status: {
          204: patentSchema.match.response.valid
        }
      }
    },
    handler: match
  },
  {
    method: 'DELETE',
    path: '/patent',
    config: {
      tags: ['api', 'patent'],
      description: `Access level: ${Roles.ADMIN}`,
      plugins: {
        hapiAuthorization: { roles: [Roles.ADMIN] }
      },
      validate: {
        payload: patentSchema.destroy.request
      },
      response: {
        status: {
          200: patentSchema.destroy.response.valid
        }
      }
    },
    handler: destroy
  }
];

export default routes;
