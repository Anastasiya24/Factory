const Router = require('express-promise-router')
const router = new Router();
const client = require("../config/client");

router.get("/show-factories-list", (req, res) => {
  client.query("SELECT * FROM factory WHERE is_delete=false", (err, result) => {
    if (err) {
      console.log("Error " + err);
      res.status(400).send(err);
    }
    res.status(200).json(result.rows);
  });
});

router.post("/add-factory", (req, res) => {
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

router.patch("/drop-factory/:factoryId", (req, res) => {
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

module.exports = router;
