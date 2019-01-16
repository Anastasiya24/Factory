const express = require("express");
const pg = require("pg");
const { Client } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");
const confiqDB = require("./config/configDB");

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const client = new Client({
  connectionString: `postgres://postgres:${
    confiqDB.password
  }@localhost:5432/Factory`
});

client.connect();

app.get("/show-factories-list", (req, res) => {
  client.query("SELECT * FROM factory WHERE is_delete=false", (err, result) => {
    if (err) {
      console.log("Error " + err);
      res.status(400).send(err);
    }
    res.status(200).json(result.rows);
  });
});

app.post("/add-factory", (req, res) => {
  client.query(
    "INSERT INTO Factory(factory_name, description) VALUES ($1, $2) RETURNING factory_id, factory_name, description",
    [req.body.factoryName, req.body.description],
    (err, result) => {
      if (err) {
        console.log("Error: " + err);
        res.status(400).sendStatus(err);
      }
      res.status(200).json(result.rows);
    }
  );
});

app.patch("/drop-factory/:factoryId", (req, res) => {
  client.query(
    "UPDATE Factory SET is_delete = $1 WHERE factory_id = $2",
    [true, req.params.factoryId],
    (err, result) => {
      if (err) {
        console.log("Error: " + err);
        res.status(400).sendStatus(err);
      }
      res.status(200).json(result);
    }
  );
});

app.listen(5000, () => console.log("Server started"));
