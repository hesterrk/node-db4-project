// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/food.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },

  pool : {
    afterCreate: (conn, done) => {
      //runs after a connection is made to the sqlite engine
      conn.run("PRAGMA foreign_keys = ON", done) //turns off FK enforcement
    }
  }

}


};
