import target from '../../../src/modules/search/search.routes';
import * as controller from '../../../src/modules/search/search.controller';

import test from 'ava';

test('COMPANY BY NAME [GET] search route is not authenticated', t => {
  const expected = false;

  const route = target.find(r => r.handler === controller.companyByName);

  t.is(route.config.auth, expected);
});

test('PATENT BY TEXT [GET] search route is not authenticated', t => {
  const expected = false;

  const route = target.find(r => r.handler === controller.patentByText);

  t.is(route.config.auth, expected);
});
