module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: "./db/dev.sqlite"
    },
    directory: './migrations',
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
    directory: __dirname+'/../migrations',
    migrations: {
      tableName: 'knex_version'
    }
  }
};
