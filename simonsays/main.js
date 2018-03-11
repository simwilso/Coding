$(document).ready(function tictactoe() {

// JAVASCRIPT

// SETUP GLOBAL VARIABLES
var userObj = {1: "#", 2: "#", 3: "#", 4: "#", 5: "#", 6: "#", 7: "#", 8: "#", 9: "#", 10: "#", 11: "#", 12: "#", 13: "#", 14: "#", 15: "#", 16: "#", 17: "#", 18: "#", 19: "#", 20: "#"};
var compObj = {1: "#", 2: "#", 3: "#", 4: "#", 5: "#", 6: "#", 7: "#", 8: "#", 9: "#", 10: "#", 11: "#", 12: "#", 13: "#", 14: "#", 15: "#", 16: "#", 17: "#", 18: "#", 19: "#", 20: "#"};
var count = 1;
console.log(compObj);
computer();
// FUNCTIONS

// function to capture users button pushes
function user() {
  $(".ticked").click(function capture() {
   var input = $(this).attr("id");
   userObj[count] = input;
   console.log(userObj);
   count++;
  });

// reset function
  $("#reset").click(function capture() {
    window.location.reload();
  });
}
// function to generate computers flash combination
function computer() {
  var AITurn = (Math.random()*3).toFixed();
  console.log(AITurn);
  switch(AITurn) {
    case "0":
      compObj[count] = "green";
      console.log(compObj);
      count++;
      break;
    case "1":
      compObj[count] = "red";
      console.log(compObj);
      count++;
      break;
    case "2":
      compObj[count] = "yellow";
      console.log(compObj);
      count++;
      break;
    case "3":
      compObj[count] = "blue";
      console.log(compObj);
      count++;
      break;
}
}

// function to check if the combination entered is correct

// strict mode

// PROGRAM



});
