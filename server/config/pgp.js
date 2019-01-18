const pgp = require("pg-promise")({});
const confiqDB = require("../config/configDB");

const db = pgp(
  `postgres://postgres:${confiqDB.password}@localhost:5432/Factory`
);

module.exports = db;