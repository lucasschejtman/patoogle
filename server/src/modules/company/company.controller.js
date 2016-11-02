import Company from './company.model';

import Boom from 'boom';

export const get = async (request, reply) => {
  try {
    const company = await Company.forge({ name: request.params.name }).fetch();
    return reply(company).code(200);
  } catch(err) {
    console.log(err);
    return reply(Boom.badRequest());
  }
};
