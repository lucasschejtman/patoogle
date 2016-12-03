import Roles from '../../../src/enums/roles.enum';
import target from '../../../src/modules/patent/patent.routes';
import * as controller from '../../../src/modules/patent/patent.controller';

import test from 'ava';

test('GET [GET] patent route is not authenticated', t => {
  const expected = false;

  const route = target.find(r => r.handler === controller.get);

  t.is(route.config.auth, expected);
});

test('CREATE [POST] patent route is authenticated for ADMIN', t => {
  const expected = [Roles.ADMIN];

  const route = target.find(r => r.handler === controller.create);

  t.deepEqual(route.config.plugins.hapiAuthorization.roles, expected);
});

test('UPDATE [PUT] patent route is authenticated for ADMIN', t => {
  const expected = [Roles.ADMIN];

  const route = target.find(r => r.handler === controller.update);

  t.deepEqual(route.config.plugins.hapiAuthorization.roles, expected);
});

test('MATCH [PUT] patent route is authenticated for ADMIN', t => {
  const expected = [Roles.ADMIN];

  const route = target.find(r => r.handler === controller.match);

  t.deepEqual(route.config.plugins.hapiAuthorization.roles, expected);
});

test('DESTROY [DELETE] patent route is authenticated for ADMIN', t => {
  const expected = [Roles.ADMIN];

  const route = target.find(r => r.handler === controller.destroy);

  t.deepEqual(route.config.plugins.hapiAuthorization.roles, expected);
});
