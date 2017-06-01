// HTML ROUTES
var path = require("path");

module.exports = function(app, passport) {

/* GET login page. */
	app.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('home', { message: req.flash('message') });
	});

	/* Handle Login POST */
	app.post('/login', passport.authenticate('login', {
		successRedirect: '/logOrRank', //use whatever we're going with.
		failureRedirect: '/',
		failureFlash : true
	}));

	/* GET Registration Page */
	app.get('/signup', function(req, res){
		res.render('signup',{message: req.flash('message')});
	});

	/* Handle Registration POST */
	app.post('/signup', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/signup',
		failureFlash : true
	}));

	/* GET Home Page */
	app.get('/logOrRun', isAuthenticated, function(req, res){
		res.render('logOrRun', { user: req.user });
	});

	/* Handle Logout */
	app.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});


};
