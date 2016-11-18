import test from 'ava';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const bcryptMock = {
  genSalt: (rounds, cb) => cb(null, 'salt'),
  hash: (toHash, salt, cb) => cb(null, 'hashed'),
  compare: (plaintext, hash, cb) => cb(null, true)
};

const target = () => proxyquire('../../src/core/crypt', {
  'bcrypt': bcryptMock,
});

test('crypt.createSalt resolves promise with salt', async t => {
  const result = await target().createSalt(1);

  t.is(result, 'salt');
});

test('crypt.createHash resolves promise with hashed', async t => {
  const result = await target().createHash('1', 'x');

  t.is(result, 'hashed');
});

test('crypt.compareHash resolves promise with true', async t => {
  const result = await target().compareHash('1', 'x');

  t.is(result, true);
});
