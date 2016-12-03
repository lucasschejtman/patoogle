import target from '../../../src/modules/patent/patent.schema';

import test from 'ava';

test('patent.get.request schema is valid with guid id', t => {
  const request = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };

  const result = target.get.request.validate(request);

  t.is(result.error, null);
});

test('patent.get.response.valid schema is valid with guid company id', t => {
  const response = {
    id: "6ff08836-0c5f-471c-9656-440c98c8b1b7",
    matched_company_id: "6ff08836-0c5f-471c-9656-440c98c8b1b8",
    created_at: "2016-11-09T20:40:08+00:00",
    updated_at: "2016-11-09T20:40:08+00:00"
  };

  const result = target.get.response.valid.validate(response);

  t.is(result.error, null);
});

test('patent.get.response.valid schema is valid with null company id', t => {
  const response = {
    id: "6ff08836-0c5f-471c-9656-440c98c8b1b7",
    matched_company_id: null,
    created_at: "2016-11-09T20:40:08+00:00",
    updated_at: "2016-11-09T20:40:08+00:00"
  };

  const result = target.get.response.valid.validate(response);

  t.is(result.error, null);
});

test('patent.create.response.valid schema is valid with guid id', t => {
  const response = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };

  const result = target.create.response.valid.validate(response);

  t.is(result.error, null);
});

test('patent.match.request.params schema is valid with guid id', t => {
  const request = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };

  const result = target.match.request.params.validate(request);

  t.is(result.error, null);
});

test('patent.match.request.payload schema is valid with [3-15] string', t => {
  const request = { name: "xxxxxx" };

  const result = target.match.request.payload.validate(request);

  t.is(result.error, null);
});

test('patent.match.response.valid schema is valid', t => {
  const response = {
    id: "6ff08836-0c5f-471c-9656-440c98c8b1b7",
    matched_company_id: "6ff08836-0c5f-471c-9656-440c98c8b1b8",
    updated_at: "2016-11-09T20:40:08+00:00"
  };

  const result = target.match.response.valid.validate(response);

  t.is(result.error, null);
});

test('patent.update.request schema is valid with guid id', t => {
  const request = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };

  const result = target.update.request.validate(request);

  t.is(result.error, null);
});

test('patent.update.response.valid is valid', t => {
  const response = {
    id: "6ff08836-0c5f-471c-9656-440c98c8b1b7",
    updated_at: "2016-11-09T20:40:08+00:00"
  };

  const result = target.update.response.valid.validate(response);

  t.is(result.error, null);
});

test('patent.destroy.request schema is valid with guid id', t => {
  const request = { id: "6ff08836-0c5f-471c-9656-440c98c8b1b7" };

  const result = target.destroy.request.validate(request);

  t.is(result.error, null);
});
