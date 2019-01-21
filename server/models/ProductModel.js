const Sequelize = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const ProductModel = sequelize.define("products", {
  product_name: { 
    type: Sequelize.STRING,
    validate: {
      len: [2, 200]
    }
  },
  factory_id: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true
    }
  },
  cost: {
    type: Sequelize.DOUBLE,
    validate: {
      // notNull: true
    }
  },
  is_delete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = ProductModel;
