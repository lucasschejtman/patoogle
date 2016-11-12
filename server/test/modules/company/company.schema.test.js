import target from '../../../src/modules/company/company.schema';

import test from 'ava';

test('company.get.request schema is valid with string name', t => {
  const request = { name: "string" };

  const result = target.get.request.validate(request);

  t.is(result.error, null);
});

test('company.get.response.valid schema is valid with string name', t => {
  const response = {
    id: "6ff08836-0c5f-471c-9656-440c98c8b1b7",
    name: "string",
    created_at: "2016-11-09T20:40:08+00:00",
    updated_at: "2016-11-09T20:40:08+00:00"
  };

  const result = target.get.response.valid.validate(response);

  t.is(result.error, null);
});

test('company.create.request schema is valid with string name', t => {
  const request = { name: "string" };

  const result = target.create.request.validate(request);

  t.is(result.error, null);
});

test('company.create.response.valid schema is valid with guid id', t => {
  const response = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };

  const result = target.create.response.valid.validate(response);

  t.is(result.error, null);
});

test('company.update.request schema is valid with guid id', t => {
  const request = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7", name: "string" };

  const result = target.update.request.validate(request);

  t.is(result.error, null);
});

test('company.update.response.valid is valid', t => {
  const response = {
    id: "6ff08836-0c5f-471c-9656-440c98c8b1b7",
    name: "string",
    updated_at: "2016-11-09T20:40:08+00:00"
  };

  const result = target.update.response.valid.validate(response);

  t.is(result.error, null);
});

test('company.destroy.request schema is valid with guid id', t => {
  const request = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };

  const result = target.destroy.request.validate(request);

  t.is(result.error, null);
});
