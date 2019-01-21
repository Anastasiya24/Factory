const Sequelize = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const UserModel = sequelize.define("orders", {
  user_name: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
      len: [2, 200]
    }
  },
  user_email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notNull: true
    }
  },
  user_password: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
      len: [5, 200]
    }
  },
  is_delete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = UserModel;
