'use strict';

exports.seed = function(knex, Promise) {
  return knex('objectives').insert([
      {
        author: 'Tim',
        content: 'Student will be able to create a custom Angular directive.',
        version: '1.0.2',
        keywords: ['Angular', 'directive', 'javascript']
      },
      {
        author: 'Eric',
        author_org: 'Giant Robots, Inc.',
        version: '1.5.55',
        content: 'Students will be able to route a client side app in Backbone.',
        keywords: ['routing', 'Backbone']
      },
      {
        author: 'Sue',
        author_org: 'Bocoup',
        version: '0.1.0',
        content: 'Students will be able to make basic shapes with 2js.',
        keywords: ['d2', 'shapes', 'geometry', 'visualization']
      }
    ]).then(function() {
      return knex('resources').insert([
        {
          author: 'Tim',
          title: 'Basic Angular filtering directive',
          license: 'MIT',
          version: '5.0.0',
          objective_id: 1,
          github_url: 'https://github.com/tbranyen/angular-directive.git'
        },
        {
          author: 'Sue',
          version: '10.3.0',
          title: 'Making a circle with 2.js',
          objective_id: 2,
          github_url: 'https://github.com/deathbearbrown/2js-circle.git'
        }
      ]);
    });
};
