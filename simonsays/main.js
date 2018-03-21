$(document).ready(function simonsays() {
// JAVASCRIPT

// SETUP GLOBAL VARIABLES
var colorObj = {0: "green", 1: "red", 2: "yellow", 3: "blue"};
var level = 20;
var currentLevel = 0;
var strict = false;
var error = false;
var sound = {
  green: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", //green
  red: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", //red
  yellow: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", //yellow
  blue: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" //blue
};

var userArray = [];
var compArray = [];

// FUNCTIONS

//START/RESET BUTTON event handler.
$("#reset").click(function capture() {
    $("#strict").css("background-color", "white");
    $(".ticked").css("background-color", "");
    currentLevel = 0;
    currentLevel++;
    strict = false;
    error = false;
    userArray = [];
    compArray = [];
    computer();//start computer sequence.
});


//STRICT BUTTON event handler.
$("#strict").click(function capture() {
    $("#strict").css("background-color", "gray");
    currentLevel = 0;
    strict = true;
    error = false;
    currentLevel++
    userArray = [];
    compArray = [];
    computer();//start computer sequence.
});

//USER button event handler.
$(".ticked").click(function capture() {
    var input = $(this).attr("id");
    $("#"+input).css("background-color", "gray");
    setInterval(timer, 2000);
    user(input);//kickoff user sequence check
});

//FUNCTIONS

//CHECK USER to COMP Choice
function checkSeq() {
  for(var i = 0; i < userArray.length; i++) {
    if(userArray[i] != compArray[i]) {
      return false;
    }
  }
  return true;
}

//USERS sequence
function user(input) {
  userArray.push(input);
  addSound(input);
  console.log(userArray);
    if(!checkSeq()) {
      if(strict) {
        console.log("strict");
        compArray = [];
        currentLevel = 0;
      }
      error = true;
      disError();
      userArray = [];
      computer();
    }
  //checking end of sequence
  else if(userArray.length == compArray.length && userArray.length < level) {
    currentLevel++;
    userArray = [];
    error = false;
    computer();
  }
  //checking for winners
  if(userArray.length == level) {
    winner();
    resetGame();
  }
}

//COMPUTERS sequence

function computer() {
    $("#count").html(currentLevel);
    if(!error) {
      var AITurn = colorObj[(Math.random()*3).toFixed()];
      compArray.push(AITurn);
      $("#"+AITurn).css("background-color", "gray");
      console.log(compArray);
      }
      if(error && strict) {
        var AITurn = colorObj[(Math.random()*3).toFixed()];
        compArray.push(AITurn);
        $("#"+AITurn).css("background-color", "gray");
        }
        var i = 0;
        var myInterval = setInterval(function() {
          id = compArray[i];
          color = $("#"+AITurn).css("background-color", "");
          addSound(input);
          i++;
          if(i == compArray.length) {
            clearInterval(myInterval);
          }
        }, 2000);
      }


//RESET Game FUNCTION
function resetGame() {
  $("#strict").css("background-color", "white");
  $(".ticked").css("background-color", "");
  count = 0;
  currentLevel = 0;
  strict = false;
  error = false;
  userArray = [];
  compArray = [];
}

//DISPLAY a WINNER
function winner() {
  var count = 0;
  var winInterval = setInterval(function() {
    count++;
    $("#count").text("WINNER");
    if(count == 5) {
      clearInterval(winInterval);
      $("#count").text("0");
      count = 0;
    }
  }, 500);
}

//DISPLAY a error
function disError() {
  console.log("error");
  var counter = 0;
  var myError = setInterval(function() {
  $("#count").text("ERROR");
  counter++;
    if(counter == 3) {
        $("#count").text(currentLevel);
        clearInterval(myError);
        userSeq = [];
        counter = 0;
    }
  }, 500);
  resetGame();
}
//Add the sound class
function addSound(input, color) {
  playSound(input)
  setTimeout(function(){
  }, 500);
}

//play the sound
function playSound(input) {
  var Newsound = new Audio(sound[input]);
  Newsound.play();
}

// BUTTON timer function
function timer() {
 $(".ticked").css("background-color", "");
}

});
