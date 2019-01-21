const Router = require("express-promise-router");
const router = new Router();
const showOrdersList = require("../controllers/orderController").showOrdersList;
const dropOrder = require("../controllers/orderController").dropOrder;

router.get("/show-orders-list/:factoryId", showOrdersList);
router.patch("/drop-order/:orderId", dropOrder);

module.exports = router;
