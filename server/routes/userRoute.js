const Router = require("express-promise-router");
const router = new Router();
const showUsersList = require('../controllers/usersController').showUsersList;

router.get("/show-users-list/", showUsersList);

module.exports = router;

