import Joi from 'joi';

const getSchema = {
  request: {
    id: Joi.string().uuid({ version: ['uuidv4'] }).required()
  },
  response: {
    valid: {
      id: Joi.string().uuid({ version: ['uuidv4'] }),
      matched_company_id: Joi.string().uuid({ version: ['uuidv4'] }).allow(null),
      created_at: Joi.date().iso(),
      updated_at: Joi.date().iso()
    }
  }
};

const createSchema = {
  request: {

  },
  response: {
    valid: {
      id: Joi.string()
    }
  }
};

const matchSchema = {
  request: {
    params: {
      id: Joi.string().uuid({ version: ['uuidv4'] }).required()
    },
    payload: {
      name: Joi.string().min(3).max(15).required()
    }
  },
  response: {
    valid: {
      id: Joi.string().uuid({ version: ['uuidv4'] }),
      matched_company_id: Joi.string().uuid({ version: ['uuidv4'] }),
      updated_at: Joi.date().iso()
    }
  }
}

const updateSchema = {
  request: {
    id: Joi.string().uuid({ version: ['uuidv4'] })
  },
  response: {
    valid: {
      id: Joi.string().uuid({ version: ['uuidv4'] }),
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
};

export default {
  get: getSchema,
  create: createSchema,
  match: matchSchema,
  update: updateSchema,
  destroy: destroySchema
};
