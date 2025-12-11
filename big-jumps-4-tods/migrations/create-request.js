exports.up = async function(knex) {
  await knex.schema.createTable('requests', (table) => {
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('phone').notNullable();
    table.string('email').notNullable();
    table.date('party_date').notNullable();
    table.text('message').nullable();
    table.string('party_address').notNullable();
    table.string('address_line2').nullable();
    table.timestamp('party_start_time', { useTz: true }).notNullable();
    table.timestamp('party_end_time', { useTz: true }).notNullable();
    table.string('package').notNullable();
    table.string('theme').nullable();
    table.string('referral').nullable();
    table.timestamps(true, true); // created_at, updated_at
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('requests');
};
