'use strict';

exports.seed = function(knex, Promise) {
  return knex('lists').insert([
      {
        curator: 'Ashley',
        name: 'RESTful Sinatra API.',
        description: 'Build a RESTful API with Sinatra.',
        version: '0.0.0',
        license: 'MIT',
        keywords: ['Sinatra', 'ruby', 'API']
      },
      {
        curator: 'Eric',
        name: 'Nodebots with audio input',
        description: 'Create a Nodebot that can move in sync to music.',
        version: '0.5.0',
        keywords: ['routing', 'Backbone']
      },
      {
        curator: 'Sue',
        name: 'Data-binding in Backbone',
        version: '0.4.44',
        license: 'MIT',
        keywords: ['d2', 'shapes', 'geometry', 'visualization']
      }
    ]).then(function() {
      return knex('list_resources').insert([
        {
          notes: 'Comes before the thing after it.',
          piep_id: 1,
          list_id: 1
        },
        {
          piep_id: 1,
          list_id: 1
        },
        {
          notes: 'Some notes.',
          piep_id: 2,
          list_id: 2
        },
        {
          piep_id: 1,
          list_id: 1
        },
        {
          piep_id: 1,
          list_id: 1
        }
      ]);
    });
};
