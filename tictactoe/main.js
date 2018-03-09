$(document).ready(function tictactoe() {

// JAVASCRIPT

// SETUP GLOBAL VARIABLES
var selected = "X";
var objgame = {TL: "#", TM: "#", TR: "#", ML: "#", MM: "#", MR: "#", BL: "#", BM: "#", BR: "#"}
var count = 0;

// SETUP FUNCTIONS

// select button and start game
function start() {
  $(":input").click(function capture() {
    if ($(this).val() === "resetX") {
      reset();
      selected = "X";
      $("#message").html("So you think you can win with X? You wish!  Go ahead make your move!");
      console.log(selected);
      play();
      //need to clear the table
    } else if ($(this).val() === "resetO") {
      reset();
      selected = "O";
      $("#message").html("So you think you can win with O? No chance!  Go ahead make your move!");
      console.log(selected);
      play();
      //need to clear the table
    }
  });
}

// WORKS - function to play the game
function play() {
 if (count % 2 == 0) {
   user();
 } else {
   computer();
 }
}

// WORKS - function to take the input from the user
function user() {
    $(".ticked").click(function capture() {
      var input = $(this).attr("id");
      if (objgame[input] === "#") {
        $(this).html(selected);
        objgame[input] = selected;
        console.log(objgame);
        count++;
        play();
      }
    });
}

// function for computers move
function computer() {
  //checks the position FUNCTION
  //makes the appropriate move based on the above evaluation
  //if the evaluation realises a draw/win/or loss produce a message.
  console.log("now its my turn");
  count++;
}

//function to evaluate the current state of the game and propose the next move
function position() {

}

//reset FUNCTION
function reset() {
  objgame = {TL: "#", TM: "#", TR: "#", ML: "#", MM: "#", MR: "#", BL: "#", BM: "#", BR: "#"}
  count = 0;
  $(".ticked").html("#");
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
