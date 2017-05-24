//Requires
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./routes/html-routes.js");

//Passport Setup
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var session = require("express-session");
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

//Passport Configuration
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

//Server Setup
var app = express();
var PORT = 3000;

//Body parser Stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//User Login
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

//routes
htmlRoutes(app);

//ServerListening
app.listen(PORT, function(){
  console.log("Listenng on PORT" + PORT);
});
