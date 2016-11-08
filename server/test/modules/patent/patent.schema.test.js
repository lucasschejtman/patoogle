import target from '../../../src/modules/patent/patent.schema';

import test from 'ava';
import Joi from 'joi';

test('getSchema request schema is valid', t => {
  const request = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };
  Joi.validate(request, target.get.request, (err, value) => {
    t.is(err, null);
  });
});
