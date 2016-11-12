import User from '../../../src/modules/user/user.model';
import Session from '../../../src/modules/auth/session.model';

import test from 'ava';
import Boom from 'boom';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

const reply = (resp) => ({
  _response: resp,
  _statusCode: 0,
  get statusCode () {
    return this._statusCode
  },
  set statusCode (value) {
    this._statusCode = value
  },
  code (n) {
    this._statusCode = n;
    return this;
  }
});

const target = () => proxyquire('../../../src/modules/auth/auth.controller', {
  './session.model': Session,
  '../user/user.model': User
});

let sandbox;

test.beforeEach(t => {
  sandbox = sinon.sandbox.create();
});

test.afterEach.always(t => {
  sandbox.restore();
});

test('dummy', t => t.is(true, true));
