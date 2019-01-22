const User = require("../models/UserModel");

exports.showUsersList = (req, res) => {
  User.findAll({ where: { is_delete: false } }).then(users => res.json(users));
};

exports.addUser = (req, res) => {
  User.create({
    user_name: req.body.userName,
    user_email: req.body.userEmail
  }).then(data => res.status(200).json(data));
};