import { companyByName, patentByText } from './search.controller';
import searchSchema from './search.schema';
import Roles from '../../enums/roles.enum';

const routes = [
  {
    method: 'GET',
    path: '/search/company/{name}',
    config: {
      auth: false,
      tags: ['api', 'search'],
      description: `Access level: ${Roles.GUEST}`,
      validate: {
        params: searchSchema.companyByName.request
      },
      response: {
        status: {
          200: searchSchema.companyByName.response.valid
        }
      }
    },
    handler: companyByName
  },
  {
    method: 'GET',
    path: '/search/patent/{text}',
    config: {
      auth: false,
      tags: ['api', 'search'],
      description: `Access level: ${Roles.GUEST}`,
      validate: {
        params: searchSchema.patentByText.request
      },
      response: {
        status: {
          200: searchSchema.patentByText.response.valid
        }
      }
    },
    handler: patentByText
  }
];

export default routes;
