import target from '../../../src/modules/auth/auth.routes';
import * as controller from '../../../src/modules/auth/auth.controller';

import test from 'ava';

test('REGISTER [POST] auth route is not authenticated', t => {
  const expected = false;

  const route = target.find(r => r.handler === controller.register);

  t.is(route.config.auth, expected);
});

test('LOGIN [POST] auth route is not authenticated', t => {
  const expected = false;

  const route = target.find(r => r.handler === controller.login);

  t.is(route.config.auth, expected);
});
