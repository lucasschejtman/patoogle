import Session from '../../../src/modules/auth/session.model';

import test from 'ava';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const target = () => proxyquire('../../../src/modules/auth/session.validation', {
  './session.model': Session
}).default;

let sandbox;

test.beforeEach(t => {
  sandbox = sinon.sandbox.create();
});

test.afterEach.always(t => {
  sandbox.restore();
});

test.serial('session.validation returns valid for valid session', async t => {
  const decoded = { sid: '1' };
  const user = { 'role': 'ADMIN', get(prop) { return this[prop]; } };
  const session = { session_id: '1', end_ts: (Math.floor(new Date().getTime() / 1000) + 10000) };
  sandbox.stub(Session.prototype, 'fetch').returns({
    ...session,
    get(prop) { return this[prop]; },
    related(prop) { return user; }
  });
  const assert = (err, valid, role) => {
    t.is(valid, true);
    t.deepEqual(role, { role: user.role });
  };

  await target()(decoded, null, assert);
});

test.serial('session.validation returns invalid for invalid session', async t => {
  const decoded = { sid: '1' };
  const user = { 'role': 'ADMIN', get(prop) { return this[prop]; } };
  const session = { session_id: '1', end_ts: (Math.floor(new Date().getTime() / 1000) - 10000) };
  sandbox.stub(Session.prototype, 'fetch').returns({
    ...session,
    get(prop) { return this[prop]; },
    related(prop) { return user; }
  });
  const assert = (err, valid, role) => {
    t.is(valid, false);
    t.deepEqual(role, { role: 'GUEST' });
  };

  await target()(decoded, null, assert);
});

test.serial('session.validation returns invalid when errors', async t => {
  const decoded = { sid: '1' };
  sandbox.stub(Session.prototype, 'fetch').throws();
  const assert = (err, valid, role) => {
    t.is(valid, false);
  };

  await target()(decoded, null, assert);
});
