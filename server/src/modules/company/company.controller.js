import Company from './company.model';
import * as logger from '../../core/logger';

import Boom from 'boom';

export const get = async (request, reply) => {
  try {
    const company = await Company.forge({ name: request.params.name }).fetch();
    return reply(company.toJSON()).code(200);
  } catch(err) {
    logger.error(err);
    return reply(Boom.badRequest());
  }
};

export const create = async (request, reply) => {
  try {
    const company = await Company.forge(request.payload).save(null, { method: 'insert' });
    return reply({ id: company.get('id') }).code(202);
  } catch(err) {
    logger.error(err);
    return reply(Boom.badRequest());
  }
};

export const update = async (request, reply) => {
  try {
    const updated = await Company.forge().save(request.payload, { method: 'update' });
    return reply(updated.toJSON()).code(204);
  } catch(err) {
    logger.error(err);
    return reply(Boom.badRequest());
  }
};

export const destroy = async (request, reply) => {
  try {
    const destroyed = await Company.forge(request.payload).destroy();
    return reply({}).code(200);
  } catch(err) {
    logger.error(err);
    return reply(Boom.badRequest());
  }
};
