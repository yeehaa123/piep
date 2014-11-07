'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.
    createTable('list_resources', function (t) {
      t.increments('id');
      t.text('notes');
      t.text('piep_id').notNullable();
      t.integer('list_id').references('id').inTable('lists').notNullable();
      t.timestamp('created').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('list_resources');
};
