import * as logger from '../../../src/core/logger';
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
  '../user/user.model': User,
  '../../core/logger': logger
});

let sandbox;

test.beforeEach(t => {
  sandbox = sinon.sandbox.create();
});

test.afterEach.always(t => {
  sandbox.restore();
});

test.serial('register returns code 201 for created user', async t => {
  sandbox.stub(User.prototype, 'save').returns({});

  const result = await target().register({ payload: { name: "name" } }, reply);

  t.is(result.statusCode, 201);
  t.is(result._response, 'user created');
});

test.serial('register returns badRequest when errors', async t => {
  const expected = Boom.badRequest();
  sandbox.stub(User.prototype, 'save').throws();
  sandbox.spy(logger, 'error');

  const result = await target().register({ payload: { name: "name" } }, reply);

  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});

test.serial('login returns code 202 and token for valid credentials', async t => {
  const request = { payload: { name: "name", password: "1234" } };
  const user = { id: '1', password: "$2a$12$dtsMu8DrJY4KWD8.EZOwIeR4WvHGRkIW4lN5enhYm5F8plqK09/em", get(prop) { return this[prop]; } };
  sandbox.stub(User.prototype, 'fetch').returns(user);
  sandbox.stub(Session.prototype, 'save').returns({});

  const result = await target().login(request, reply);

  t.is(result.statusCode, 202);
  t.not(result._response.token, null);
});

test.serial('login returns unauthorized for invalid credentials', async t => {
  const request = { payload: { name: "name", password: "123" } };
  const expected = Boom.unauthorized('incorrect username or password');
  const user = { id: '1', password: "$2a$12$dtsMu8DrJY4KWD8.EZOwIeR4WvHGRkIW4lN5enhYm5F8plqK09/em", get(prop) { return this[prop]; } };
  sandbox.stub(User.prototype, 'fetch').returns(user);
  sandbox.stub(Session.prototype, 'save').returns({});

  const result = await target().login(request, reply);

  t.deepEqual(result._response, expected);
});

test.serial('login returns badRequest when error', async t => {
  const expected = Boom.badRequest();
  const request = { payload: { name: "name", password: "123" } };
  const user = { id: '1', password: "$2a$12$dtsMu8DrJY4KWD8.EZOwIeR4WvHGRkIW4lN5enhYm5F8plqK09/em", get(prop) { return this[prop]; } };
  sandbox.stub(User.prototype, 'fetch').throws();
  sandbox.stub(Session.prototype, 'save').returns({});
  sandbox.spy(logger, 'error');

  const result = await target().login(request, reply);

  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});
