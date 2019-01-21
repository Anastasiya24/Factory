const Sequelize = require("sequelize");
const confiqDB = require("../config/configDB");

const sequelize = new Sequelize("Factories", "postgres", `${confiqDB.password}`, {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
