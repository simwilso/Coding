$(document).ready(function tictactoe() {

// JAVASCRIPT

// SETUP GLOBAL VARIABLES
var selected = "X";
var objgame = {TL: "#", TM: "#", TR: "#", ML: "#", MM: "#", MR: "#", BL: "#", BM: "#", BR: "#"}
var count = 0;
var gameon = true;

// SETUP FUNCTIONS

// WORKS - select button and start game
function start() {
  $(":input").click(function capture() {
    if ($(this).val() === "resetX") {
      reset();
      selected = "X";
      $("#message").html("So you think you can win with X? You wish!  Go ahead make your move!");
      console.log(selected);
      play();
    } else if ($(this).val() === "resetO") {
      reset();
      selected = "O";
      $("#message").html("So you think you can win with O? No chance!  Go ahead make your move!");
      console.log(selected);
      play();
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
  winner();
  count++;
}

//function to evaluate the current state of the game and propose the next move
function algo() {

}

//WORKS - function for win conditions
function winner() {
//win for the Xs
    if (objgame.TL === "X" && objgame.TM === "X" && objgame.TR === "X") {
      if (selected === "X") {
        $("#message").html("OMG you won!!");
      } else {
        $("#message").html("Kicked your arse again!!");
      }
    }
    else if (objgame.TL === "X" && objgame.MM === "X" && objgame.BR === "X") {
      if (selected === "X") {
        $("#message").html("OMG you won!!");
      } else {
        $("#message").html("Kicked your arse again!!");
      }
    }
    else if (objgame.TL === "X" && objgame.ML === "X" && objgame.BL === "X") {
      if (selected === "X") {
        $("#message").html("OMG you won!!");
      } else {
        $("#message").html("Kicked your arse again!!");
      }
    }
    else if (objgame.ML === "X" && objgame.MM === "X" && objgame.MR === "X") {
      if (selected === "X") {
        $("#message").html("OMG you won!!");
      } else {
        $("#message").html("Kicked your arse again!!");
      }
    }
    else if (objgame.BL === "X" && objgame.BM === "X" && objgame.BR === "X") {
      if (selected === "X") {
        $("#message").html("OMG you won!!");
      } else {
        $("#message").html("Kicked your arse again!!");
      }
    }
    else if (objgame.BL === "X" && objgame.MM === "X" && objgame.TR === "X") {
      if (selected === "X") {
        $("#message").html("OMG you won!!");
      } else {
        $("#message").html("Kicked your arse again!!");
      }
    }
    else if (objgame.TM === "X" && objgame.MM === "X" && objgame.BM === "X") {
      if (selected === "X") {
        $("#message").html("OMG you won!!");
      } else {
        $("#message").html("Kicked your arse again!!");
      }
    }
    else if (objgame.TR === "X" && objgame.MR === "X" && objgame.BR === "X") {
      if (selected === "X") {
        $("#message").html("OMG you won!!");
      } else {
        $("#message").html("Kicked your arse again!!");
      }
    }
    //win for the Os
        else if (objgame.TL === "O" && objgame.TM === "O" && objgame.TR === "O") {
          if (selected === "O") {
            $("#message").html("OMG you won!!");
          } else {
            $("#message").html("Kicked your arse again!!");
          }
        }
        else if (objgame.TL === "O" && objgame.MM === "O" && objgame.BR === "O") {
          if (selected === "O") {
            $("#message").html("OMG you won!!");
          } else {
            $("#message").html("Kicked your arse again!!");
          }
        }
        else if (objgame.TL === "O" && objgame.ML === "O" && objgame.BL === "O") {
          if (selected === "O") {
            $("#message").html("OMG you won!!");
          } else {
            $("#message").html("Kicked your arse again!!");
          }
        }
        else if (objgame.ML === "O" && objgame.MM === "O" && objgame.MR === "O") {
          if (selected === "O") {
            $("#message").html("OMG you won!!");
          } else {
            $("#message").html("Kicked your arse again!!");
          }
        }
        else if (objgame.BL === "O" && objgame.BM === "O" && objgame.BR === "O") {
          if (selected === "O") {
            $("#message").html("OMG you won!!");
          } else {
            $("#message").html("Kicked your arse again!!");
          }
        }
        else if (objgame.BL === "O" && objgame.MM === "O" && objgame.TR === "O") {
          if (selected === "O") {
            $("#message").html("OMG you won!!");
          } else {
            $("#message").html("Kicked your arse again!!");
          }
        }
        else if (objgame.TM === "O" && objgame.MM === "O" && objgame.BM === "O") {
          if (selected === "O") {
            $("#message").html("OMG you won!!");
          } else {
            $("#message").html("Kicked your arse again!!");
          }
        }
        else if (objgame.TR === "O" && objgame.MR === "O" && objgame.BR === "O") {
          if (selected === "O") {
            $("#message").html("OMG you won!!");
          } else {
            $("#message").html("Kicked your arse again!!");
          }
        } else {
          $("#message").html("nice try!");
        }
  }


//WORKS - reset FUNCTION
function reset() {
  objgame = {TL: "#", TM: "#", TR: "#", ML: "#", MM: "#", MR: "#", BL: "#", BM: "#", BR: "#"}
  count = 0;
  $(".ticked").html("#");
}

//start the game
start();
});
