import { object, string } from 'joi';

const STR = string().required();

const companyByName = {
  request: object({
    name: STR
  }),
  response: {
    valid: {
      // TBD
    }
  }
};

const patentByText = {
  request: object({
    text: STR
  }),
  response: {
    valid: {
      // TBD
    }
  }
};

export default {
  companyByName,
  patentByText
};
