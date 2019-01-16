const { Client } = require("pg");
const confiqDB = require("../config/configDB");

const client = new Client({
  connectionString: `postgres://postgres:${
    confiqDB.password
  }@localhost:5432/Factory`
});

module.exports = client;