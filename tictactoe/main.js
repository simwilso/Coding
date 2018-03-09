$(document).ready(function tictactoe() {

// JAVASCRIPT

// SETUP GLOBAL VARIABLES
var selected = "X";
var game = [];
var objgame = {TL: "#", TM: "#", TR: "#", ML: "#", MM: "#", MR: "#", BL: "#", BM: "#", BR: "#"}
//var counter = 10;

// SETUP FUNCTIONS

// select button and start game
function start() {
  $(":input").click(function capture() {
    if ($(this).val() === "resetX") {
      selected = "X";
      $("#message").html("So you think you can win with X? You wish!  Go ahead make your move!");
      console.log(selected);
      user();
      //need to clear the table
    } else if ($(this).val() === "resetO") {
      selected = "O";
      $("#message").html("So you think you can win with O? No chance!  Go ahead make your move!");
      console.log(selected);
      user();
      //need to clear the table
    }
  });
}

// function to play the game
function play() {

}

// function to take the input from the user
function user() {
    $(".ticked").click(function capture() {
      var input = $(this).attr("id");
      if (selected === "X") {
        $(this).html("X");
        objgame[input] = "X";
        console.log(objgame);
      } else {
        $(this).html("O");
        objgame[input] = "O";
        console.log(objgame);
      }
    });
}

// function for computers move
function computer() {
  //checks the position FUNCTION
  //makes the appropriate move based on the above evaluation
  //if the evaluation realises a draw/win/or loss produce a message.
  console.log("now its my turn");
}

//function to evaluate the current state of the game and propose the next move
function position() {

}


start();
});


//<label class="container">X
//  <button value="resetX" id="resetX" type="radio" checked="checked" name="radio">
//  <span class="checkmark"></span>
//</label>

//    <button value="resetX"><a href="#" class="btn btn-lg"><i></i>X</a></button>

//<label class="container">O
//  <button value="resetO" id="resetO" type="radio" name="radio">
//  <span class="checkmark"></span>
//</label>

//    <button value="resetO"><a href="#" class="btn btn-lg"><i></i>O</a></button>
