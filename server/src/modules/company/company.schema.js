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

const updateSchema = {
  request: {
    id: Joi.string().uuid({ version: ['uuidv4'] }),
    name: Joi.string().min(3).max(15)
  },
  response: {
    valid: {
      id: Joi.string().uuid({ version: ['uuidv4'] }),
      name: Joi.string().min(3).max(15),
      updated_at: Joi.date().iso()
    }
  }
};

const destroySchema = {
  request: {
    id: Joi.string().uuid({ version: ['uuidv4'] })
  },
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
