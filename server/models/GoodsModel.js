const Sequelize = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const GoodsModel = sequelize.define("goods", {
  product_id: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
      notNull: true
    }
  },
  order_id: {
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

module.exports = GoodsModel;
