import Session from './session.model';
import User from '../user/user.model';
import sessionSchema from './session.schema';
import { createSalt, createHash, compareHash } from '../../core/crypt';

import aguid from 'aguid';
import JWT from 'jsonwebtoken';

export const register = async (request, reply) => {
  const salt = await createSalt(12);
  const hash = await createHash(request.payload.password, salt);
  try {
    const newUser = await User.forge({ name: request.payload.name, password: hash }).save(null, { method: 'insert' });
    return reply('user created').code(201);
  } catch(err) {
    return reply('user already exists').code(400);
  }
};

const registerCfg = {
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
};

export const login = async (request, reply) => {
  try {
    const user = await User.forge({ name: request.payload.name }).fetch({ columns: ['id', 'password'] });
    const passwordMatch = await compareHash(request.payload.password, user.get('password'));
    if(passwordMatch) {
      const sid = aguid();
      const session = await Session.forge({ session_id: sid, user_id: user.id }).save(null, { method: 'insert' });
      const token = JWT.sign({
        sid: sid,
        //TODO: move exp and jwt secret to conf
        exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60
      }, '123456');

      return reply({ name: user.name, token: token }).code(200);
    }

    return reply('incorrect username or password').code(401);
  } catch(err) {
    return reply('incorrect username or password').code(401);
  }
};

const loginCfg = {
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
};

// Just to test token - will be removed soon
const testCfg = {
  method: 'GET',
  path: '/test',
  config: {
    tags: ['api']
  },
  handler: (req, repl) => repl('authenticated')
};

export default [registerCfg, loginCfg, testCfg];
