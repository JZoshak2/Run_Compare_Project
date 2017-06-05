var express = require("express");

var router = express.Router();

// Import the model (users.js) to use its database functions
var user = require("../models/users.js");

// Create all routes and setup logic within these routes where required
// Route to home page
router.get("/", function(req, res) {
  res.render("home");
});
// Route to registration (register) page
router.get("/register", function(req, res) {
  res.render("register");
});
// Route to Sign In (login) page
router.get("/login", function(req, res) {
  res.render("login");
});

router.get("/logOrRank", function(req, res) {
  res.render("logOrRank");
});

router.get("/logRun", function(req, res) {
  res.render("logRun");
});


// router.get("/", function(req, res) {
// 	// user.all(function(data) {
// 	// 	var hbsObject = {
// 	// 		runners: data
// 	// 	};
// 	// 	console.log(hbsObject);
// 	// 	res.render("index", hbsObject);
// 	// });
// });



router.post("/", function(req, res) {
	user.create([
		"firstName", "lastName", "email", "zip"
		], [
		req.body.firstName, req.body.lastName, req.body.email, req.body.email, req.body.zip
		], function() {
			res.redirect("/");
		});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

});

module.exports = router;

