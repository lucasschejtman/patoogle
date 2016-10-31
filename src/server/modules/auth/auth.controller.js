import Session from './session.model';
import User from '../user/user.model';
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

export default [{
  method: 'POST',
  path: '/register',
  handler: register,
  config: { auth: false }
}, {
  method: 'POST',
  path: '/login',
  handler: login,
  config: { auth: false }
},
// Just to test token - will be removed soon
{
  method: 'GET',
  path: '/test',
  handler: (req, repl) => repl('authenticated')
}];
