//Write API routes.


var db = require("../models");

module.exports = function(app) {

  // POST route for saving a new todo
  app.post("/api/runs", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Runs.create({
      UserId: req.user.id,
      distance: req.body.distance,
      time: req.body.time,
      pace: req.body.pace, //need to write function to calc pace
      note: req.body.note

    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
      res.redirect("/logOrRank");
    });
  });
};
