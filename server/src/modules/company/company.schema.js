import Joi from 'joi';

const getSchema = {
  request: {
    name: Joi.string().required()
  },
  response: {
    valid: {
      id: Joi.string().uuid({ version: ['uuidv4'] }),
      name: Joi.string().min(3).max(15),
      created_at: Joi.date().iso(),
      updated_at: Joi.date().iso()
    }
  }
};

const createSchema = {
  request: {
    name: Joi.string().min(3).max(15).required()
  },
  response: {
    valid: {
      id: Joi.string()
    }
  }
};

export default {
  get: getSchema,
  create: createSchema
};
