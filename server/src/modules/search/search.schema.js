import Joi from 'joi';

const companyByName = {
  request: {
    name: Joi.string().required()
  },
  response: {
    valid: {
      // TBD
    }
  }
};

const patentByText = {
  request: {
    text: Joi.string().required()
  },
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
