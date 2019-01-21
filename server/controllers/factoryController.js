const Factory = require("../models/FactoryModel");
const Products = require("../models/ProductModel");

exports.showFactoriesList = (req, res) => {
  Factory.findAll({ where: { is_delete: false } }).then(factory =>
    res.status(200).json(factory)
  );
};

function createProductsList(productList, factoryId) {
  let newProductList = [];
  productList.map(pr =>
    newProductList.push({
      product_name: pr.productName,
      factory_id: +factoryId,
      cost: +pr.cost
    })
  );
  return newProductList;
}

exports.addFactory = (req, res) => {
  Factory.create({
    factory_name: req.body.factoryName,
    description: req.body.description
  }).then(factory => {
    if (factory) {
      let productList = createProductsList(req.body.productList, factory.id);
      Promise.all(productList.map(pr => Products.create(pr))).then(pr =>
        res.status(200).json(factory)
      );
    }
  });
};

exports.dropFactory = (req, res) => {
  Factory.update(
    { is_delete: true },
    { where: { id: req.params.factoryId } }
  ).then(res => res.status(200).json(res));
};
