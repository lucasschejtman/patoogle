import sessionSchema from './session.schema';
import { login, register } from './auth.controller';
import Roles from '../../enums/roles.enum';

const routes = [
  {
    method: 'POST',
    path: '/auth/register',
    handler: register,
    config: {
      auth: false,
      tags: ['api', 'auth'],
      description: `Access level: ${Roles.GUEST}`,
      validate: {
        payload: sessionSchema.register.request
      }
    }
  },
  {
    method: 'POST',
    path: '/auth/login',
    handler: login,
    config: {
      auth: false,
      tags: ['api', 'auth'],
      description: `Access level: ${Roles.GUEST}`,
      response: {
        status: {
          202: sessionSchema.login.response.valid
        }
      },
      validate: {
        payload: sessionSchema.login.request
      }
    }
  }
]

export default routes;
