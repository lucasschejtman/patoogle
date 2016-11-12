import { object, string, date } from 'joi';

const STR = string().required();
const NAME = STR.min(3).max(15);
const DATE = date().iso().required();
const GUID = string().uuid({ version: ['uuidv4'] }).required();

const getSchema = {
  request: object({
    name: STR
  }),
  response: {
    valid: object({
      id: GUID,
      name: NAME,
      created_at: DATE,
      updated_at: DATE
    })
  }
};

const createSchema = {
  request: object({
    name: NAME
  }),
  response: {
    valid: object({
      id: GUID
    })
  }
};

const updateSchema = {
  request: object({
    id: GUID,
    name: NAME
  }),
  response: {
    valid: object({
      id: GUID,
      name: NAME,
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
}

export default {
  get: getSchema,
  create: createSchema,
  update: updateSchema,
  destroy: destroySchema
};
