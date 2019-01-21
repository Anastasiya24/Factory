const Product = require("../models/ProductModel");

exports.showProductsList = (req, res) => {
  Product.findAll({ where: { factory_id: req.params.factoryId } }).then(products =>
    res.json(products)
  );
};
