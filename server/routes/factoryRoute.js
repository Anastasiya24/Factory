const Router = require("express-promise-router");
const router = new Router();
const showFactoriesList = require('../controllers/factoryController').showFactoriesList;
const addFactory = require('../controllers/factoryController').addFactory;
const dropFactory = require('../controllers/factoryController').dropFactory;

router.get("/show-factories-list/", showFactoriesList);
router.post("/add-factory", addFactory);
router.patch("/drop-factory/:factoryId", dropFactory)

module.exports = router;

