import Roles from '../../../src/enums/roles.enum';
import target from '../../../src/modules/company/company.routes';
import * as controller from '../../../src/modules/company/company.controller';

import test from 'ava';

test('GET [GET] company route is not authenticated', t => {
  const expected = false;

  const route = target.find(r => r.handler === controller.get);

  t.is(route.config.auth, expected);
});

test('CREATE [POST] company route is authenticated for ADMIN', t => {
  const expected = [Roles.ADMIN];

  const route = target.find(r => r.handler === controller.create);

  t.deepEqual(route.config.plugins.hapiAuthorization.roles, expected);
});

test('UPDATE [PUT] company route is authenticated for ADMIN', t => {
  const expected = [Roles.ADMIN];

  const route = target.find(r => r.handler === controller.update);

  t.deepEqual(route.config.plugins.hapiAuthorization.roles, expected);
});

test('DESTROY [DELETE] patent route is authenticated for ADMIN', t => {
  const expected = [Roles.ADMIN];

  const route = target.find(r => r.handler === controller.destroy);

  t.deepEqual(route.config.plugins.hapiAuthorization.roles, expected);
});
