const Router = require("express-promise-router");
const router = new Router();
const showUsersList = require('../controllers/usersController').showUsersList;
const addUser = require("../controllers/usersController").addUser;

router.get("/show-users-list/", showUsersList);
router.post("/add-user", addUser)

module.exports = router;

