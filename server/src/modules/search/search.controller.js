import searchService from './search.service';

import Boom from 'boom';

export const companyByName = async (request, reply) => {
  try {
    const company = await searchService.companyByName(request.params.name);
    return reply(company).code(200);
  } catch(err) {
    console.log(err);
    return reply(Boom.badRequest());
  }
};

export const patentByText = async (request, reply) => {
  try {
    const patent = await searchService.patentByText(request.params.name);
    return reply(patent).code(200);
  } catch(err) {
    console.log(err);
    return reply(Boom.badRequest());
  }
};
