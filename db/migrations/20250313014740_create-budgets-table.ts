import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('budgets', (table) => {
    table.increments('id').primary(); 
    table.integer('client_id').notNullable().references('id').inTable('clients').onDelete('CASCADE');
    table.string('short_description').notNullable();
    table.text('description').notNullable(); 
    table.enum('status', [
      'payment_pending',
      'approved',
      'delivered',
      'customer_canceled',
    ]
    ).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('budgets');
}

