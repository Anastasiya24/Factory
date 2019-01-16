app.get("/show-factories-list", (req, res) => {
    client.query("SELECT * FROM factory", (err, result) => {
      if (err) {
        console.log("Error " + err);
        res.status(400).send(err);
      }
      res.status(200).json(result.rows);
    });
  });
  
  app.post("/add-factory", (req, res) => {
    client.query(
      //   (factory_name, description)
      `INSERT INTO Factory (factory_name, description) VALUES 
      (${req.body.factoryName}, ${req.body.description}) RETURNING factory_id, factory_name, description`,
      (err, result) => {
        if (err) {
          console.log("Error: " + err);
          res.status(400).sendStatus(err);
        }
        res.status(200).json(result.rows);
      }
    );
  });