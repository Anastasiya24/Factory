const Factory = require("../models/FactoryModel");

exports.showFactoriesList = (req, res) => {
  Factory.findAll({ where: { is_delete: false } }).then(factory =>
    res.json(factory)
  );
};

exports.addFactory = (req, res) => {
  Factory.create({
    factory_name: req.body.factoryName,
    description: req.body.description
  }).then(factory => res.json(factory));
};

exports.dropFactory = (req, res) => {
  Factory.update({ is_delete: true }, { where: { id: req.params.factoryId } });
};
