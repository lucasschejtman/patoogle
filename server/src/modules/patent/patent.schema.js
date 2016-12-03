import { object, string, date } from 'joi';

const DATE = date().iso().required();
const GUID = string().uuid({ version: ['uuidv4'] }).required();

const getSchema = {
  request: object({
    id: GUID
  }),
  response: {
    valid: object({
      id: GUID,
      matched_company_id: GUID.allow(null),
      created_at: DATE,
      updated_at: DATE
    })
  }
};

const createSchema = {
  request: {

  },
  response: {
    valid: object({
      id: GUID
    })
  }
};

const matchSchema = {
  request: {
    params: object({
      id: GUID
    }),
    payload: object({
      name: string().min(3).max(15).required()
    })
  },
  response: {
    valid: object({
      id: GUID,
      matched_company_id: GUID,
      updated_at: DATE
    })
  }
}

const updateSchema = {
  request: object({
    id: GUID
  }),
  response: {
    valid: object({
      id: GUID,
      updated_at: DATE
    })
  }
};

const destroySchema = {
  request: object({
    id: GUID
  }),
  response: {
    valid: {

    }
  }
};

export default {
  get: getSchema,
  create: createSchema,
  match: matchSchema,
  update: updateSchema,
  destroy: destroySchema
};
