import target from '../../../src/modules/auth/session.schema';

import test from 'ava';

test('session.register.request schema is valid with string name and string password', t => {
  const request = { name: "string", password: "string" };

  const result = target.register.request.validate(request);

  t.is(result.error, null);
});

test('session.login.request schema is valid with string name and string password', t => {
  const request = { name: "string", password: "string" };

  const result = target.login.request.validate(request);

  t.is(result.error, null);
});

test('session.login.response.valid schema is valid with string name', t => {
  const response = { token: "string" };

  const result = target.login.response.valid.validate(response);

  t.is(result.error, null);
});
