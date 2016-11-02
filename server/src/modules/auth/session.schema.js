import Joi from 'joi';

const registerSchema = {
  request: {
    name: Joi.string(),
    password: Joi.string()
  }
};

const loginSchema = {
  response: {
    valid: {
      name: Joi.string(),
      token: Joi.string()
    }
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
