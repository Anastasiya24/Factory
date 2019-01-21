const Sequelize = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const FactoryModel = sequelize.define("factories", {
  factory_name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      len: [2, 200]
    }
  },
  description: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      len: [20, 200]
    }
  },
  is_delete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = FactoryModel;
