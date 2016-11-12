import { object, string } from 'joi';

const STR = string().required();

const registerSchema = {
  request: object({
    name: STR,
    password: STR
  })
};

const loginSchema = {
  request: object({
    name: STR,
    password: STR
  }),
  response: {
    valid: object({
      token: STR
    })
  }
};

export default {
  login: loginSchema,
  register: registerSchema
};
