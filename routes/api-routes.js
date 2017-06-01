//Write API routes.
var express = require("express");

var router = express.Router();

var db = require("../models");


  // POST route for saving a new todo
  router.post("/api/runs", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)

    //need to write function to calc pace
    db.Runs.create({
      distance: req.body.distance,
      time: req.body.time,
      pace: req.body.pace, 
      run_notes: req.body.run_notes

    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.redirect("/rankings");
    });
  });

  // router.post("/api/runresults", function(req, res){
  //   db.Users.create({
      
  //   });
  // });

module.exports = router;