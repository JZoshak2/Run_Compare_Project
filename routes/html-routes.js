// HTML ROUTES
var express = require("express");
var db = require("../models");
var path = require("path");
var router = express.Router();

// app.get("/", function(req, res){
//   res.sendFile(path.join(__dirname, "../public/"));
// });

router.get("/", function(req, res) {
  res.render("home");
});
// Route to registration (register) page
router.get("/signup", function(req, res) {
  res.render("signup");
});
// Route to Sign In (login) page
router.get("/login", function(req, res){
  res.render("login");
});

router.get("/logRun", function(req, res) {
  res.render("logRun");
});

router.get("/logOrRank", function(req, res) {
  res.render("logOrRank");
});

router.get("/rankings", function(req, res){
  // db.Runs.findAll({
  // 	where: {
  // 		usersId: user
  // 	}
  // })
  db.Runs.findAll({}).then(function(data){
  	console.log(data);
  	res.render("rankings", { 
  		results: data
  	});
  });
  
});

module.exports = router;
