import * as logger from '../../../src/core/logger';
import Patent from '../../../src/modules/patent/patent.model';
import Company from '../../../src/modules/company/company.model';

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

const target = () => proxyquire('../../../src/modules/patent/patent.controller', {
  './patent.model': Patent,
  '../../core/logger': logger,
  '../company/company.model': Company
});

let sandbox;

test.beforeEach(t => {
  sandbox = sinon.sandbox.create();
});

test.afterEach.always(t => {
  sandbox.restore();
});

test.serial('get returns patent on success', async t => {
  const expected = { name: "lucas" };
  sandbox.stub(Patent.prototype, 'fetch').returns({ toJSON: () => expected });
  const request = { params: { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" } };

  const result = await target().get(request, reply);

  t.is(result.statusCode, 200);
  t.deepEqual(result._response, expected);
});

test.serial('get returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.spy(logger, 'error');
  sandbox.stub(Patent.prototype, 'fetch').throws();
  const request = { params: { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" } };

  const result = await target().get(request, reply);

  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});

test.serial('create returns patent id on success', async t => {
  const expected = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };
  sandbox.stub(Patent.prototype, 'save').returns({ ...expected, get(prop) { return this[prop]; } });

  const result = await target().create({ payload: { id: '1' } }, reply);

  t.is(result.statusCode, 202);
  t.deepEqual(result._response, expected);
});

test.serial('create returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.spy(logger, 'error');
  sandbox.stub(Patent.prototype, 'save').throws();

  const result = await target().create({}, reply);


  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});

test.serial('match returns matched patent on success', async t => {
  const expected = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };
  const request = {
    params: { id: '1' },
    payload: { name: 'name' }
  };
  sandbox.stub(Company.prototype, 'fetch').returns({ id: '1', get(prop) { return this[prop]; } });
  sandbox.stub(Patent.prototype, 'save').returns({ toJSON: () => expected });

  const result = await target().match(request, reply);

  t.is(result.statusCode, 204);
  t.deepEqual(result._response, expected);
});

test.serial('match returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.spy(logger, 'error');
  sandbox.stub(Company.prototype, 'fetch').throws();

  const result = await target().match({ payload: { name: 'name' } }, reply);


  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});

test.serial('update returns updated patent on success', async t => {
  const expected = { id: '1' };
  sandbox.stub(Patent.prototype, 'save').returns({ toJSON: () => expected });

  const result = await target().update({ payload: { } }, reply);

  t.is(result.statusCode, 204);
  t.deepEqual(result._response, expected);
});

test.serial('match returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.spy(logger, 'error');
  sandbox.stub(Patent.prototype, 'save').throws();

  const result = await target().update({ payload: { } }, reply);


  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});

test.serial('destroy returns empty object on success', async t => {
  const expected = {};
  sandbox.stub(Patent.prototype, 'destroy').returns(true);

  const result = await target().destroy({ payload: { } }, reply);

  t.is(result.statusCode, 200);
  t.deepEqual(result._response, expected);
});

test.serial('destroy returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.spy(logger, 'error');
  sandbox.stub(Patent.prototype, 'destroy').throws();

  const result = await target().destroy({ payload: { } }, reply);


  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});
