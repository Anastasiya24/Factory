const User = require("../models/UserModel");

exports.showUsersList = (req, res) => {
  User.findAll({ where: { is_delete: false } });
};
