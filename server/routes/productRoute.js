const Router = require("express-promise-router");
const router = new Router();
const showProductsList = require("../controllers/productController").showProductsList;
const changeProduct = require("../controllers/productController").changeProduct;

router.get("/show-products-list/:factoryId", showProductsList);
router.put("/change-products/:productId", changeProduct);

module.exports = router;
