const Router = require("express-promise-router");
const router = new Router();
const showGoodsList = require("../controllers/goodsController").showGoodsList;

router.get("/show-goods-list", showGoodsList);

module.exports = router;