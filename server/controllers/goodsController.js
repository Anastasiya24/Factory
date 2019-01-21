const Goods = require("../models/GoodsModel");

exports.showGoodsList = (req, res) => {
    Goods.findAll({
      where: { order_id: req.params.orderId, is_delete: false }
    }).then(goods => res.json(goods));
  };