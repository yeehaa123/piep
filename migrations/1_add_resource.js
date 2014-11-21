'use strict';

exports.up = function (knex) {
  return knex.schema.
    createTable('resources', function (t) {
      t.increments('id');
      t.text('author').notNullable();
      t.text('author_org');
      t.text('title').notNullable();
      t.text('description');
      t.integer('objective_id').references('id').inTable('objectives').notNullable();
      t.integer('estimated_min_duration');
      t.integer('estimated_max_duration');
      t.text('url').notNullable();
      t.text('keywords');
      t.text('version').notNullable();
      t.text('license');
      t.timestamp('created').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    });
};

exports.down = function (knex) {
  return knex.schema.
    dropTableIfExists('resources');
};
