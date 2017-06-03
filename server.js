//Requires
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./routes/html-routes.js");

//Server Setup
var app = express();
var PORT = 3000;

var db = require("./models");

//Passport Setup
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var session = require("express-session");
app.use(session({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

//Connect Flash Setup
var flash = require('connect-flash');
app.use(flash());

//handlebars Setup
var exphbs = require("express-handlebars");
// Set handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

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

var initPassport = require('./passport/init');
initPassport(passport);

//Body parser Stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// //User Login
// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );

//routes
htmlRoutes(app, passport);

//ServerListening
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
