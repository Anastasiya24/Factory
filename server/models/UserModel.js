const Sequelize = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const UserModel = sequelize.define("users", {
  user_name: {
    type: Sequelize.STRING,
    validate: {
      len: [2, 200]
    }
  },
  user_email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  is_delete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = UserModel;
