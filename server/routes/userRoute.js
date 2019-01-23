const Router = require("express-promise-router");
const router = new Router();
const showUsersList = require('../controllers/usersController').showUsersList;
const showUser = require('../controllers/usersController').showUser;
const addUser = require("../controllers/usersController").addUser;

router.get("/show-users-list", showUsersList);
router.get("/show-user/:userId", showUser)
router.post("/add-user", addUser)

module.exports = router;

