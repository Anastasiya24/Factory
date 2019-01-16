const Router = require("express-promise-router");
const router = new Router();
const client = require("../config/client");
const showOrdersList = require("../queries/orderQueries").showOrdersList;
const dropOrder = require("../queries/orderQueries").dropOrder;

router.get("/show-orders-list/:factoryId", (req, res) => {
  client.query(showOrdersList, [req.params.factoryId], (err, result) => {
    if (err) {
      console.log("Error " + err);
      res.status(400).send(err);
    }
    res.status(200).json(result.rows);
  });
});

router.patch("/drop-order/:orderId", (req, res) => {
  client.query(dropOrder, [true, req.params.orderId], (err, result) => {
    if (err) {
      console.log("Error: " + err);
      res.status(400).sendStatus(err);
    }
    res.status(200).json(req.params.orderId);
  });
});

module.exports = router;
