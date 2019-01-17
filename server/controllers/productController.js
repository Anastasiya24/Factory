const Router = require("express-promise-router");
const router = new Router();
const pool = require("../config/pool");
const showProductsList = require("../queries/productQuery").showProductsList;

router.get("/show-products-list/:factoryId", (req, res) => {
  pool.query(showProductsList, [req.params.factoryId], (err, result) => {
    if (err) {
      console.log("Error " + err);
      res.status(400).send(err);
    }
    res.status(200).json(result.rows);
  });
});

module.exports = router;