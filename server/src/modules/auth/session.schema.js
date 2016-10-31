// https://github.com/hapijs/joi
import Joi from 'joi';

// We can have more specific rules once we know what we need

const registerSchema = {
  request: {
    name: Joi.string(),
    password: Joi.string()
  }
};

const loginSchema = {
  response: {
    name: Joi.string(),
    token: Joi.string()
  },
  request: {
    name: Joi.string().required(),
    password: Joi.string().required()
  }
};

export default {
  login: loginSchema,
  register: registerSchema
};
