import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('tickets', (table) => {
    table.increments('id').primary();
    table.string('barcode').notNullable();
    table.string('date').notNullable();
    table.integer('value').notNullable().unsigned();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('tickets');
}

