$(document).ready(function simonsays() {
// JAVASCRIPT

// SETUP GLOBAL VARIABLES
var colorObj = {0: "green", 1: "red", 2: "yellow", 3: "blue"};
//var userObj = {1: "#", 2: "#", 3: "#", 4: "#", 5: "#", 6: "#", 7: "#", 8: "#", 9: "#", 10: "#", 11: "#", 12: "#", 13: "#", 14: "#", 15: "#", 16: "#", 17: "#", 18: "#", 19: "#", 20: "#"};
//var compObj = {1: "#", 2: "#", 3: "#", 4: "#", 5: "#", 6: "#", 7: "#", 8: "#", 9: "#", 10: "#", 11: "#", 12: "#", 13: "#", 14: "#", 15: "#", 16: "#", 17: "#", 18: "#", 19: "#", 20: "#"};

var level = 20;
var currentLevel = 0;
var strict = false;
var error = false;
var sounds = [
  "http://www.soundjay.com/button/sounds/button-4.mp3", //green
  "http://www.soundjay.com/button/sounds/button-09.mp3", //red
  "http://www.soundjay.com/button/sounds/button-10.mp3", //yellow
  "http://www.soundjay.com/button/sounds/button-7.mp3" //blue
];

var userArray = [];
var compArray = [];


//PROGRAM

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
  addSound(id);//, color);
  console.log(userArray);
    if(!checkSeq()) {
      //if playing strict mode reset everything
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
    //setInterval(timer, 4000);
    if(!error) {
      var AITurn = colorObj[(Math.random()*3).toFixed()];
      compArray.push(AITurn);
      $("#"+AITurn).css("background-color", "gray");
      console.log(compArray);
/*      switch(AITurn) {
        case "0":
          compArray.push("green");
          $("#green").css("background-color", "gray");
          setInterval(timer, 3000);
          console.log(compArray);
          break;
        case "1":
          compArray.push("red");
          $("#red").css("background-color", "gray");
          setInterval(timer, 3000);
          console.log(compArray);
          break;
        case "2":
          compArray.push("yellow");
          $("#yellow").css("background-color", "gray");
          setInterval(timer, 3000);
          console.log(compArray);
          break;
        case "3":
          compArray.push("blue");
          $("#blue").css("background-color", "gray");
          setInterval(timer, 3000);
          console.log(compArray);
          break;
        } */
      }
      if(error && strict) {
        var AITurn = colorObj[(Math.random()*3).toFixed()];
        compArray.push(AITurn);
        $("#"+AITurn).css("background-color", "gray");

  /*      switch(AITurn) {
          case "0":
            compArray.push("green");
            $("#green").css("background-color", "gray");
            setInterval(timer, 3000);
            console.log(compArray);
            break;
          case "1":
            compArray.push("red");
            $("#red").css("background-color", "gray");
            setInterval(timer, 3000);
            console.log(compArray);
            break;
          case "2":
            compArray.push("yellow");
            $("#yellow").css("background-color", "gray");
            setInterval(timer, 3000);
            console.log(compArray);
            break;
          case "3":
            compArray.push("blue");
            $("#blue").css("background-color", "gray");
            setInterval(timer, 3000);
            console.log(compArray);
            break;
          } */
        }
        var i = 0;
        var myInterval = setInterval(function() {
          id = compArray[i];
          color = $("#"+AITurn).css("background-color", "");
          //color = color.split(" ")[1];
          //console.log(id+" "+color);
          addSound(id);//, color);
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

//Play a sound
function addSound(id, color) {
  playSound(id)
  setTimeout(function(){
  }, 500);
}

// play board sound
function playSound(id) {
  var sound = new Audio(playSound[id]);
  sound.play();
}

// BUTTON timer function
function timer() {
 $(".ticked").css("background-color", "");
}

});
