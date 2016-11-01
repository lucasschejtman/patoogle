import Session from './session.model';
import User from '../user/user.model';
import { createSalt, createHash, compareHash } from '../../core/crypt';

import Boom from 'boom';
import aguid from 'aguid';
import JWT from 'jsonwebtoken';

export const register = async (request, reply) => {
  const salt = await createSalt(12);
  const hash = await createHash(request.payload.password, salt);
  try {
    const newUser = await User.forge({ name: request.payload.name, password: hash }).save(null, { method: 'insert' });
    return reply('user created').code(201);
  } catch(err) {
    return reply(Boom.badRequest());
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

      return reply({ name: user.name, token: token }).code(202);
    }

    return reply(Boom.unauthorized('incorrect username or password'));
  } catch(err) {
    return reply(Boom.badImplementation(err));
  }
};
