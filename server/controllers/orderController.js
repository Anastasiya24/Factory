const Order = require("../models/OrderModel");

exports.showOrdersList = (req, res) => {
  Order.findAll({
    where: { factory_id: req.params.factoryId, is_delete: false }
  }).then(orders => res.json(orders));
};

exports.dropOrder = (req, res) => {
  Order.update({ is_delete: true }, { where: { id: req.params.orderId } });
};
