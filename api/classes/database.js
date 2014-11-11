const config = require('../../config/db');
const env = process.env.NODE_ENV;
const envConfig = env === 'staging' ? config.staging : config.development;

console.log('Connecting to '+ envConfig.client + ' at ' + envConfig.connection.filename + '...');

const knex = require('knex')(envConfig);
const bookshelf = require('bookshelf')(knex);

console.log('Running migrations...');
knex.migrate.latest(envConfig);

module.exports = bookshelf;
