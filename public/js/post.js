$(document).ready(function() {
  /* global moment */

// When user clicks submit
$("#run-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newRun object
  var newRun = {
    distance: $("#runDistance").val().trim(),
    time: $("#runTime").val().trim(),
    pace: (function(time,distance){
      runFactor = (60 / this.time);
      return runFactor * this.distance;
    });
    notes: $("#runNotes").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newRun);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newRun)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      row.addClass("run");

      row.append("<p>" + newRun.distance + "</p>");
      row.append("<p>" + newRun.time + "</p>");
      row.append("<p>" + newRun.pace + "</p>");
      row.append("<p>" + newRun.notes + "</p>");
      row.append("<p>At " + moment(newRun.created_at).format("h:mma on dddd") + "</p>");

      $("#run-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#inputDistance").val("");
  $("#inputTime").val("");
  $("#inputNotes").val("");

});

// When the page loads, grab all of our runs
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("run");

      row.append("<p>" + data[i].distance + "</p>");
      row.append("<p>" + data[i].time + "</p>");
      row.append("<p>" + data[i].pace + "</p>");
      row.append("<p>" + data[i].notes + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#run-area").prepend(row);

    }

  }

});
