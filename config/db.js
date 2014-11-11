var path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: "./db/dev.sqlite"
    },
    directory: path.resolve(__dirname, '../migrations'),
    migrations: {
      tableName: 'migrations'
    }
  },
  staging: {
    client: 'pg',
    debug: process.env.NODE_ENV !== 'production',
    connection: {
      host: 'localhost',
      user: 'postgres',
      database: 'piep'
    },
    directory: path.resolve(__dirname, '../migrations'),
    migrations: {
      tableName: 'migrations'
    }
  }
};
