import Patent from './patent.model';
import Company from '../company/company.model';

import Boom from 'boom';

export const get = async (request, reply) => {
  try {
    const patent = await Patent.forge({ id: request.params.id }).fetch();
    return reply(patent.toJSON()).code(200);
  } catch(err) {
    console.log(err);
    return reply(Boom.badRequest());
  }
};

export const create = async (request, reply) => {
  try {
    const patent = await Patent.forge(request.payload).save(null, { method: 'insert' });
    return reply({ id: patent.get('id') }).code(202);
  } catch(err) {
    console.log(err);
    return reply(Boom.badRequest());
  }
};

export const match = async (request, reply) => {
  try {
    const company = await Company.forge({ name: request.payload.name }).fetch();
    const toMatch = await Patent.forge({ id: request.params.id }).save({ matched_company_id: company.get('id') }, { method: 'update' });
    return reply(toMatch.toJSON()).code(204);
  } catch(err) {
    console.log(err);
    return reply(Boom.badRequest());
  }
};

export const update = async (request, reply) => {
  try {
    const updated = await Patent.forge().save(request.payload, { method: 'update' });
    return reply(updated.toJSON()).code(204);
  } catch(err) {
    console.log(err);
    return reply(Boom.badRequest());
  }
};

export const destroy = async (request, reply) => {
  try {
    const destroyed = await Patent.forge(request.payload).destroy();
    return reply({}).code(200);
  } catch(err) {
    console.log(err);
    return reply(Boom.badRequest());
  }
};
