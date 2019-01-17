const Router = require("express-promise-router");
const router = new Router();
const pool = require("../config/pool");
const showFactoriesList = require("../queries/factoryQueries").showFactoriesList;
const addFactory = require("../queries/factoryQueries").addFactory;
const dropFactory = require("../queries/factoryQueries").dropFactory;

router.get("/show-factories-list", (req, res) => {
  pool.query(showFactoriesList, (err, result) => {
    if (err) {
      console.log("Error " + err);
      res.status(400).send(err);
    }
    res.status(200).json(result.rows);
  });
});

router.post("/add-factory", (req, res) => {

  pool.query(
    addFactory,
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
  pool.query(
    dropFactory,
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
