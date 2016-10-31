
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('sessions', function(table) {
    table.uuid('id').index().primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('session_id').notNullable();
    table.uuid('user_id').notNullable().references('users.id');
    table.integer('start_ts').defaultTo(knex.raw('EXTRACT(EPOCH FROM CURRENT_TIMESTAMP)'));
    table.integer('end_ts').defaultTo(knex.raw('null'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sessions');
};
