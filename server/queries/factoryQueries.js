module.exports = {
  showFactoriesList: "SELECT * FROM factory WHERE is_delete=false",
  addFactory: `INSERT INTO Factory(factory_name, description) VALUES ($1, $2) RETURNING factory_id, factory_name, description, is_delete`,
  dropFactory: "UPDATE Factory SET is_delete = $1 WHERE factory_id = $2"
};
