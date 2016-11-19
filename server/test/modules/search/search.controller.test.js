import * as logger from '../../../src/core/logger';
import * as searchService from '../../../src/modules/search/search.service';

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

const target = () => proxyquire('../../../src/modules/search/search.controller', {
  './search.service': searchService,
  '../../core/logger': logger
});

let sandbox;

test.beforeEach(t => {
  sandbox = sinon.sandbox.create();
});

test.afterEach.always(t => {
  sandbox.restore();
});

test.serial('companyByName returns company on success', async t => {
  const expected = { name: "lucas" };
  sandbox.stub(searchService, 'companyByName').returns(expected);
  const request = { params: { name: "company" } };

  const result = await target().companyByName(request, reply);

  t.is(result.statusCode, 200);
  t.deepEqual(result._response, expected);
});

test.serial('companyByName returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.stub(searchService, 'companyByName').throws();
  sandbox.spy(logger, 'error');
  
  const request = { params: { name: "company" } };

  const result = await target().companyByName(request, reply);

  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});

test.serial('patentByText returns patent id on success', async t => {
  const expected = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };
  sandbox.stub(searchService, 'patentByText').returns(expected);

  const result = await target().patentByText({ params: { name: 'patent' } }, reply);

  t.is(result.statusCode, 200);
  t.deepEqual(result._response, expected);
});

test.serial('patentByText returns badRequest on error', async t => {
  const expected = Boom.badRequest();
  sandbox.stub(searchService, 'patentByText').throws();
  sandbox.spy(logger, 'error');

  const result = await target().patentByText({ params: { name: 'patent' } }, reply);

  t.is(logger.error.callCount, 1);
  t.deepEqual(result._response, expected);
});
