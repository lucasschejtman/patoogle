
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('patents', function(table) {
    table.uuid('id').index().primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('matched_company_id').nullable().references('companies.id').onDelete('SET NULL');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patents');
};
