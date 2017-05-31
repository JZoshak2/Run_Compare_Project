// HTML ROUTES
var path = require("path");

module.exports = function(app) {

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/api/all", function(req, res){
  res.sendFile(path.join(__dirname, "../public/logRun.html"));
});

app.get("/api/new", function(req, res){
  res.sendFile(path.join(__dirname, "../public/logRun.html"));
});

app.get("/login", function(req, res){
  res.sendFile(path.join(__dirname, "../public/signIn.html"));
});

app.get("/register", function(req, res){
  res.sendFile(path.join(__dirname, "../public/register.html"));
});
};
