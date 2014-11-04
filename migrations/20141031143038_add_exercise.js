'use strict';

exports.up = function (knex) {
  return knex.schema.
    createTable('exercises', function (t) {
      t.increments('id');
      t.text('author').notNullable();
      t.text('author_org');
      t.text('title').notNullable();
      t.text('description');
      t.integer('objective_id').references('id').inTable('objectives').notNullable();
      t.text('github_url').notNullable();
      t.text('keywords');
      t.timestamp('created').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    });
};

exports.down = function (knex) {
  return knex.schema.
    dropTableIfExists('exercises');
};