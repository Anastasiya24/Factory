module.exports = {
  showFactoriesList: "SELECT * FROM factory WHERE is_delete=false",

  addFactory:
    `INSERT INTO Factory(factory_name, description) VALUES ($1, $2) RETURNING factory_id, factory_name, description, is_delete`,
//     `INSERT INTO Factory(factory_name, description) VALUES ($1, $2); 
//   INSERT INTO Products(product_name, cost, factory_id) VALUES ($3, $4,
//   (SELECT factory_id FROM Factory WHERE factory_name = $1)
// )`,
  dropFactory: "UPDATE Factory SET is_delete = $1 WHERE factory_id = $2"
};
