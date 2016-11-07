
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('classifications', function(table) {
    table.uuid('id').index().primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('number').unique().notNullable();
    table.string('title').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classifications');
};
