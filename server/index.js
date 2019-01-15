const express = require("express");
const pg = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.get("/show-factories-list", (req, res) => {
  res.json([
    {
      id: "12345",
      name: "Cool Factory"
    },
    {
      id: "02345",
      name: "Perfect Factory"
    }
  ]);
});

app.listen(5000, () => console.log("Server started"));
