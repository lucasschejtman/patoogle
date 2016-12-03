import * as logger from '../../../src/core/logger';
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

const target = () => proxyquire('../../../src/modules/company/company.controller', {
  './company.model': Company,
  '../../core/logger': logger
});

let sandbox;

test.beforeEach(t => {
  sandbox = sinon.sandbox.create();
});

test.afterEach.always(t => {
  sandbox.restore();
});

test.serial('get returns company on success', async t => {
  const expected = { name: "lucas" };
  sandbox.stub(Company.prototype, 'fetch').returns({ toJSON: () => expected });
  const request = { params: { name: "name" } };

  const result = await target().get(request, reply);

  t.is(result.statusCode, 200);
  t.deepEqual(result._response, expected);
});

test.serial('get returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.spy(logger, 'error');
  sandbox.stub(Company.prototype, 'fetch').throws();

  const request = { params: { name: "name" } };

  const result = await target().get(request, reply);

  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});

test.serial('create returns company id on success', async t => {
  const expected = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };
  sandbox.stub(Company.prototype, 'save').returns({ ...expected, get(prop) { return this[prop]; } });

  const result = await target().create({ payload: { id: '1' } }, reply);

  t.is(result.statusCode, 202);
  t.deepEqual(result._response, expected);
});

test.serial('create returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.spy(logger, 'error');
  sandbox.stub(Company.prototype, 'save').throws();

  const result = await target().create({}, reply);

  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});

test.serial('update returns updated company on success', async t => {
  const expected = { id: '1' };
  sandbox.stub(Company.prototype, 'save').returns({ toJSON: () => expected });

  const result = await target().update({ payload: { } }, reply);

  t.is(result.statusCode, 204);
  t.deepEqual(result._response, expected);
});

test.serial('update returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.spy(logger, 'error');
  sandbox.stub(Company.prototype, 'save').throws();

  const result = await target().update({}, reply);

  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});

test.serial('destroy returns empty object on success', async t => {
  const expected = {};
  sandbox.stub(Company.prototype, 'destroy').returns(true);

  const result = await target().destroy({ payload: { } }, reply);

  t.is(result.statusCode, 200);
  t.deepEqual(result._response, expected);
});

test.serial('destroy returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.spy(logger, 'error');
  sandbox.stub(Company.prototype, 'destroy').throws();

  const result = await target().destroy({ payload: { } }, reply);

  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});
