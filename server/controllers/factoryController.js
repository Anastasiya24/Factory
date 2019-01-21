const Router = require("express-promise-router");
const router = new Router();
const pool = require("../config/pool");
const showFactoriesList = require("../queries/factoryQueries")
  .showFactoriesList;
const addFactory = require("../queries/factoryQueries").addFactory;
const dropFactory = require("../queries/factoryQueries").dropFactory;
//schema
const Factory = require("../schemas/factorySchema");

router.get("/show-factories-list/", (req, res) => {
  pool.query(showFactoriesList, (err, result) => {
    if (err) {
      console.log("Error " + err);
      res.status(400).send(err);
    }
    res.status(200).json(result.rows);
  });
});

// router.post("/add-factory", (req, res) => {
//   pool.query(
//     addFactory,
//     [req.body.factoryName, req.body.description],
//     (err, newFactory) => {
//       if (err) res.status(400).sendStatus(err);
//       if (newFactory) {
//         let factoryId = newFactory.rows[0].factory_id;
//         let productsList = req.body.productList;
//         productsList.map(pr =>
//           pool.query(
//             "CALL addNewProduct($1,$2,$3)",
//             [pr.productName, pr.cost, factoryId],
//             (error, newProducts) => {
//               if (error) res.status(400).sendStatus(error);
//             }
//           )
//         );
//         res.status(200).json(newFactory.rows);
//       }
//     }
//   );
// });

router.post("/add-factory", (req, res) => {
  
});

router.patch("/drop-factory/:factoryId", (req, res) => {
  pool.query(dropFactory, [true, req.params.factoryId], (err, result) => {
    if (err) {
      console.log("Error: " + err);
      res.status(400).sendStatus(err);
    }
    res.status(200).json(result);
  });
});

module.exports = router;
