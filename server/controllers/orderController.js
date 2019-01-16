const Router = require('express-promise-router')
const router = new Router();
const client = require("../config/client");

router.get("/show-orders-list/:factoryId", (req, res) => {
    client.query(
      "SELECT * FROM orders WHERE factory_id=$1 AND is_delete=false",
      [req.params.factoryId],
      (err, result) => {
        if (err) {
          console.log("Error " + err);
          res.status(400).send(err);
        }
        res.status(200).json(result.rows);
      }
    );
  });
  
  router.patch("/drop-order/:orderId", (req, res) => {
    client.query(
      "UPDATE Orders SET is_delete = $1 WHERE order_id = $2",
      [true, req.params.orderId],
      (err, result) => {
        if (err) {
          console.log("Error: " + err);
          res.status(400).sendStatus(err);
        }
        res.status(200).json(req.params.orderId);
      }
    );
  });

module.exports = router;
