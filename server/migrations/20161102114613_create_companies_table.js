
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('companies', function(table) {
    table.uuid('id').index().primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').unique().notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies');
};
