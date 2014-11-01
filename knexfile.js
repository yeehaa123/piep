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
  }
};