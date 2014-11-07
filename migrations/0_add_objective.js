'use strict';

exports.up = function (knex) {
  return knex.schema.
    createTable('objectives', function (t) {
      t.increments('id');
      t.text('author').notNullable();
      t.text('author_org');
      t.text('content').notNullable();
      t.text('keywords');
      t.text('version').notNullable();
      t.timestamp('created').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    });
};

exports.down = function (knex) {
  return knex.schema.
    dropTableIfExists('objectives');
};
