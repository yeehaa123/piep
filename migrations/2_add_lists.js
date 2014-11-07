'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.
    createTable('lists', function (t) {
      t.increments('id');
      t.text('curator').notNullable();
      t.text('curator_org');
      t.specificType('collaborators', 'text[]');
      t.text('name').notNullable();
      t.text('description');
      t.text('version');
      t.text('keywords');
      t.timestamp('created').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lists');
};
