const Product = require("../models/ProductModel");

exports.showProductsList = (req, res) => {
  Product.findAll({ where: { factory_id: req.params.factoryId } }).then(
    products => res.json(products)
  );
};

exports.changeProduct = (req, res) => {
  let productId = req.params.productId;
  Product.update(req.body, { where: { id: productId } })
  .then(product => res.status(200).json(product))
};
