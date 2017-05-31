// HTML ROUTES
var path = require("path");

module.exports = function(app) {

// app.get("/", function(req, res){
//   res.sendFile(path.join(__dirname, "../public/"));
// });

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.get("/rankings", function(req, res){
  res.render("rankings", {
  	runs: data
  });
});
};
