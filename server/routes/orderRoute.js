const Router = require("express-promise-router");
const router = new Router();
const showOrdersList = require("../controllers/orderController").showOrdersList;
const dropOrder = require("../controllers/orderController").dropOrder;
const addOrder = require("../controllers/orderController").addOrder

router.get("/show-orders-list/:factoryId", showOrdersList);
router.delete("/drop-order/:orderId", dropOrder);
router.post("/add-order", addOrder)

module.exports = router;
