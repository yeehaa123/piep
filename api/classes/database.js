const config = require('../../knexfile');

console.log('Connecting to '+ config.development.client + ' at ' + config.development.connection.filename + '...');

const knex = require('knex')(config.development);
const bookshelf = require('bookshelf')(knex);

console.log('Running migrations...');
knex.migrate.latest(config);

module.exports = bookshelf;