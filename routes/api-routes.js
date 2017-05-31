var connection = require("../config/config.json");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    var dbQuery = "SELECT * FROM runs";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {


    var dbQuery = "INSERT INTO runs (distance, time, pace, notes) VALUES (?,?,?,?)";

    connection.query(dbQuery, [req.body.distance, req.body.time, req.body.pace, req.body.notes], function(err, result) {
  
      res.end();
    });

  });

};