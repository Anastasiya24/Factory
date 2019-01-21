const Sequelize = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const FactorySchema = sequelize.define('factories', {
    factory_id: Sequelize.INTEGER,
    factory_name: Sequelize.STRING,
    description: Sequelize.STRING,
    is_delete: Sequelize.BOOLEAN,
})

module.exports = FactorySchema;