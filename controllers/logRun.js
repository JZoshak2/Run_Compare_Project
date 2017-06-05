var express = require("express");

var router = express.Router();

// Import the model (users.js) to use its database functions
var user = require("../models/users.js");

// Create all routes and setup logic within these routes where required
// Route to home page
router.get("/logRun", function(req, res) {
	user.all(function(data) {
		var hbsObject = {
			running_log: data
		};
		console.log(hbsObject);
		res.render("rankings", hbsObject);
	});
});

router.post("/", function(req, res) {
	user.create([
		"firstName", "lastName", "email", "zip", "distance", "time_results", "pace", "run_notes"
		], [
		req.body.firstName, req.body.lastName, req.body.email, req.body.zip, req.body.distance, req.body.time_results, req.body.pace, req.body.run_notes
		], function() {
			res.redirect("/rankings");
		});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

});

module.exports = router;
