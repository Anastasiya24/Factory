const { Client, Pool } = require("pg");
const confiqDB = require("../config/configDB");

const pool = new Pool({
  connectionString: `postgres://postgres:${
    confiqDB.password
  }@localhost:5432/Factory`
});

module.exports = pool;