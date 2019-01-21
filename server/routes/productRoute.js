const Router = require("express-promise-router");
const router = new Router();
const showProductsList = require("../controllers/productController").showProductsList;

router.get("/show-products-list/:factoryId", showProductsList);

module.exports = router;
