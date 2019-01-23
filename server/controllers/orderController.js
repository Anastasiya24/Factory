const Order = require("../models/OrderModel");
const Goods = require("../models/GoodsModel");

exports.showOrdersList = (req, res) => {
  Order.findAll({
    where: { factory_id: req.params.factoryId, is_delete: false },
    offset: +req.query.nextPage * 2,
    limit: 2
  }).then(orders => {
    let totalCount = orders.length;
    let currentPage = +req.query.nextPage + 1;
    let pageSize = 2;
    let responseObject = {
      orders,
      totalCount,
      currentPage,
      pageSize
    };
    res.status(200).json(responseObject);
    // res.status(200).json(orders);
  });
};

exports.dropOrder = (req, res) => {
  Order.destroy({ where: { id: req.params.orderId } }).then(() =>
    res.status(200).json(req.params.orderId)
  );
};

function createOrderList(goodsList, orderId) {
  let newGoodsList = [];
  goodsList.map(el =>
    newGoodsList.push({
      product_id: +el.id,
      order_id: orderId
    })
  );
  return newGoodsList;
}

exports.addOrder = (req, res) => {
  let newOrder = req.body;
  Order.create({
    user_id: +newOrder.userId,
    factory_id: +newOrder.factoryId
  }).then(order => {
    let goodsList = createOrderList(newOrder.goodsList, order.id);
    console.log("goodsList: ", goodsList);
    Promise.all(goodsList.map(el => Goods.create(el))).then(pr =>
      res.status(200).json(order)
    );
  });
};
