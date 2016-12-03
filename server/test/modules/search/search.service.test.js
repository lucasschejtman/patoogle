import test from 'ava';
import proxyquire from 'proxyquire';
proxyquire.noCallThru();

const target = () => proxyquire('../../../src/modules/search/search.service', {
  './search.client': {}
});

test.serial('companyByName return passed name', t => {
  const expected = 'name';

  const result = target().companyByName(expected);

  t.is(result, expected);
});

test.serial('', t => {
  const expected = 'text';

  const result = target().patentByText(expected);

  t.is(result, expected);
});
