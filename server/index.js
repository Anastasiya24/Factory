const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./config/pool");
const sequelize = require("./config/sequelizeConfig");
//controllers
const factory = require("./controllers/factoryController");
const order = require("./controllers/orderController");
const products = require("./controllers/productController");

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

pool.connect();
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use("/factory", factory);
app.use("/order", order);
app.use("/products", products);

app.listen(5000, () => console.log("Server started"));
