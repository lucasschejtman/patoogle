import sessionSchema from './session.schema';
import { login, register } from './auth.controller';

const routes = [
  {
    method: 'POST',
    path: '/auth/register',
    handler: register,
    config: {
      auth: false,
      tags: ['api', 'auth'],
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
      description: 'Endpoint to log the user in',
      response: {
        status: {
          200: sessionSchema.login.response
        }
      },
      validate: {
        payload: sessionSchema.login.request
      }
    }
  },
  // Just to test token - will be removed soon
  {
    method: 'GET',
    path: '/test',
    config: {
      tags: ['api'],
      plugins: {
        hapiAuthorization: { roles: ['FREE'] }
      }
    },
    handler: (req, repl) => repl('authenticated')
  }
]

export default routes;
