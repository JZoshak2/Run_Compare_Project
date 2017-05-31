//Requires
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var db = require("./models");
// var htmlRoutes = require("./routes/html-routes.js");

//Passport Setup
// var passport = require("passport");
// var LocalStrategy = require('passport-local').Strategy;
// var session = require("express-session");
// app.use(expressSession({secret: 'mySecretKey'}));
// app.use(passport.initialize());
// app.use(passport.session());

//Passport Configuration
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

//Server Setup
var app = express();
var PORT = 3000;

// Serve static content for the app from the "public" directory in the application directory.
// app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.static(process.cwd() + "/public"))

//Body parser Stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Dependency
var exphbs = require("express-handlebars");
// Set handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give server access to them.
var db = require("./models");
var routes = require("./controllers/home.js");
var api = require("./routes/api-routes.js");

// Routes
app.use("/", routes);
api.apiRoutes(app);

//User Login
// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );

//routes
// htmlRoutes(app);


//Sync sequelize models and Start Express App. Server Listening
db.sequelize.sync( {force: true} ).then(function() {
	app.listen(PORT, function(){
	  console.log("Listening on PORT " + PORT);
	});  
});
