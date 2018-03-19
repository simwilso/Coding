$(document).ready(function simonsays() {
// JAVASCRIPT

// SETUP GLOBAL VARIABLES
var userObj = {1: "#", 2: "#", 3: "#", 4: "#", 5: "#", 6: "#", 7: "#", 8: "#", 9: "#", 10: "#", 11: "#", 12: "#", 13: "#", 14: "#", 15: "#", 16: "#", 17: "#", 18: "#", 19: "#", 20: "#"};
var compObj = {1: "#", 2: "#", 3: "#", 4: "#", 5: "#", 6: "#", 7: "#", 8: "#", 9: "#", 10: "#", 11: "#", 12: "#", 13: "#", 14: "#", 15: "#", 16: "#", 17: "#", 18: "#", 19: "#", 20: "#"};
var count;


//PROGRAM
counter();

// FUNCTIONS

//counter FUNCTION
function counter(count) {
  setTimeout(function () {
    for (count; count<=20; count++) {
      $("#count").html(count);
//if counter < 20 run this
      if (count <= 20) {
        compObj[count] = count;
        console.log(compObj);
      }
//} //if counter = 20 you win
      $("#green").html("WINNER");
      $("#red").html("WINNER");
      $("#yellow").html("WINNER");
      $("#blue").html("WINNER");
      console.log(compObj);
      window.setTimeout(reset, 5000);
    }
  }, 3000);
    // reset button
  $("#reset").click(function capture() {
      reset();
      });
  }
//run FUNCTION

//computers turn FUNCTION

//users turn FUNCTION

// reset FUNCTION
function reset() {
  window.location.reload();
}








// program to run

//show the count variable on the output
//run the computers turn and fill the compObj with the amount of elements of counter
//user runs his turn to fill userObj.. at each step check that user selection corresponds to computers
//if it does then populate userObj and increment a user counter..
//when you reach the value of the counter variable



function run() {
    $("#count").html(count);
    incrementComp();
    user();
  }


// function to capture users button pushes
function user() {
      $(".ticked").click(function capture() {
        var input = $(this).attr("id");
        if (j <= count) {
          userObj[j] = input;
          console.log(userObj);
          checkInput();
          j++
        }
        run();
      });


}

// function to generate computers flash combination
function computer() {
  var AITurn = (Math.random()*3).toFixed();
  console.log(AITurn);
    switch(AITurn) {
      case "0":
        compObj[i] = "green";
        $("#green").css("background-color", "gray");
        setInterval(timerGreen, 2000);
        console.log(compObj);
        break;
      case "1":
        compObj[i] = "red";
        $("#red").css("background-color", "gray");
        setInterval(timerRed, 2000);
        console.log(compObj);
        break;
      case "2":
        compObj[i] = "yellow";
        $("#yellow").css("background-color", "gray");
        setInterval(timerYellow, 2000);
        console.log(compObj);
        break;
      case "3":
        compObj[i] = "blue";
        $("#blue").css("background-color", "gray");
        setInterval(timerBlue, 2000);
        console.log(compObj);
        break;
      }
  }
// function to increment the counter for computer
function incrementComp() {
    setTimeout(function () {
      computer();
      i++;
      if (i < count) {
        incrementComp();
      }
    } , 3000);
}



// function to check if the combination entered is correct
function checkInput() {
  if (userObj[j] !== compObj[j]) {
    console.log("incorrect choice");
    $("#count").html("You chose Wrong!");
    window.setTimeout(reset, 5000);
  }

}
// strict mode



// function timer
function timerGreen() {
 $("#green").css("background-color", "green");
}
function timerBlue() {
 $("#blue").css("background-color", "blue");
}
function timerYellow() {
 $("#yellow").css("background-color", "yellow");
}
function timerRed() {
 $("#red").css("background-color", "red");
}
});
