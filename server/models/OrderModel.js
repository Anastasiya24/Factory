const Sequelize = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const OrderModel = sequelize.define("orders", {
  user_id: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
      notNull: true
    }
  },
  factory_id: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
      notNull: true
    }
  },
  is_delete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = OrderModel;
