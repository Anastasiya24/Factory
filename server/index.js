const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/sequelizeConfig");
//controllers
const factory = require("./routes/factoryRoute");
const order = require("./routes/orderRoute");
const products = require("./routes/productRoute");
const users = require("./routes/userRoute");

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });

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
app.use("/users", users)

app.listen(5000, () => console.log("Server started"));
