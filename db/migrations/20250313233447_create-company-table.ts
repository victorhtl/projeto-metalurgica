import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('company', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('password', 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('company');
}

