// HTML ROUTES
var path = require("path");
var db = require("../models");

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
};

module.exports = function(app, passport) {

/* GET login page. */
	app.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('home', { message: req.flash('message') });
	});

	app.get('/login', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('login', { message: req.flash('message') });
	});

	/* Handle Login POST */
	app.post('/login', passport.authenticate('local-signin', {
		successRedirect: '/logRun', //use whatever we're going with.
		failureRedirect: '/',
		failureFlash : true
	}));

	/* GET Registration Page */
	app.get('/signup', function(req, res){
		res.render('signup',{message: req.flash('message')});
	});

	/* Handle Registration POST */
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/logRun',
		failureRedirect: '/signup',
		failureFlash : true
	}));

	/* GET Home Page */
	app.get('/logOrRank', isAuthenticated, function(req, res){
		res.render('logOrRank', { user: req.user });
	});

	app.get('/logRun', isAuthenticated, function(req, res){
		res.render('logRun', { user: req.user });
	});

	app.get('/rankings', isAuthenticated, function(req, res){
		res.render('rankings', { user: req.user });
	});

	/* Handle Logout */
	app.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});


};
