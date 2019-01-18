const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./config/pool");
const pgpDb = require("./config/pgp");
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
pgpDb.connect();


app.use("/factory", factory);
app.use("/order", order);
app.use("/products", products);

app.listen(5000, () => console.log("Server started"));
