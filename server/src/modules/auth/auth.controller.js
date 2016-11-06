import config from '../../config';
import Session from './session.model';
import User from '../user/user.model';
import Roles from '../../enums/roles.enum';
import { createSalt, createHash, compareHash } from '../../core/crypt';

import Boom from 'boom';
import aguid from 'aguid';
import JWT from 'jsonwebtoken';

export const register = async (request, reply) => {
  const salt = await createSalt(12);
  const hash = await createHash(request.payload.password, salt);
  try {
    const newUser = await User.forge({ name: request.payload.name, password: hash, role: Roles.FREE }).save(null, { method: 'insert' });
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
      const exp = Math.floor(new Date().getTime() / 1000) + (config.get('app.jwt.exp') / 1000);
      console.log(exp);
      const session = await Session.forge({ session_id: sid, user_id: user.id, end_ts: exp }).save(null, { method: 'insert' });
      const token = JWT.sign({ sid, exp }, config.get('app.jwt.key'));

      return reply({ token: token }).code(202);
    }

    return reply(Boom.unauthorized('incorrect username or password'));
  } catch(err) {
    return reply(Boom.badImplementation(err));
  }
};
