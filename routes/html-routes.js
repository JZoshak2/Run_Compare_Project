// HTML ROUTES
var path = require("path");

module.exports = function(app) {

// app.get("/", function(req, res){
//   res.sendFile(path.join(__dirname, "../public/"));
// });

app.get("/login", function(req, res){
  res.sendFile(path.join(__dirname, "../public/signIn.html"));
});

app.get("/register", function(req, res){
  res.sendFile(path.join(__dirname, "../public/register.html"));
});
};
