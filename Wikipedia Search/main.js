$(document).ready(function() {
// setup global variables
var searchString = "";

// search button pushed
$("#searchButton").on("click", function() {
 console.log("search button pushed");
 searchString = document.getElementById("searchInput").value;
 //$("#results").html(searchString);
 $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      dataType: "json",
      data: {
        action: "opensearch",
        format: "json",
        origin: "*",
        search: searchString,
        formatversion: "2"
      },
      success: function(response) {
        $("#results1").html((response[1][0]) + " - " + (response[2][0]));
        $("#results2").html((response[1][1]) + " - " + (response[2][1]));
        $("#results3").html((response[1][2]) + " - " + (response[2][2]));
        $("#results4").html((response[1][3]) + " - " + (response[2][3]));
        $("#results5").html((response[1][4]) + " - " + (response[2][4]));
        $("#btn1").on("click", function() {
         window.open(response[3][0]);
        });
        $("#btn2").on("click", function() {
         window.open(response[3][1]);
        });
        $("#btn3").on("click", function() {
         window.open(response[3][2]);
        });
        $("#btn4").on("click", function() {
         window.open(response[3][3]);
        });
        $("#btn5").on("click", function() {
         window.open(response[3][4]);
        });
      }
})
});
// random article button pushed - DONE
$("#randomButton").on("click", function() {
 window.open("https://en.wikipedia.org/wiki/Special:Random");
});
});
