$(document).ready(function pomodoro() {

// JAVASCRIPT

// SETUP GLOBAL VARIABLES
var breakTimer = 5;  //break timer variable
var sessionTimer = 30;  //sessiontime variable
var inSeconds = sessionTimer * 60;  //convert the session time from minutes to seconds

// SETUP FUNCTIONS

//WORKS - this is the function to countdown the clock.
//WORKS - display break time when timer gets to 0
function timeIt() {
  if (inSeconds>0) {
  inSeconds--;
  $("#timer").html(convertMins(inSeconds));
  console.log(convertMins(inSeconds));
} else {
  $("#timer").html("Have a break you deserve it!");
  console.log("Have a break you deserve it!");
}
}
//WORKS - this is the function to show the output in min:sec format

function convertMins(s) {
 var min = Math.floor(s / 60);
 var sec = s % 60;
 return min + ":" + sec;
}

//WORKS - if the minus button is pressed for break time reduce the 'break value' by 1 and show in min:sec format
//WORKS - don't let the number go below 0

$(":button").click(function capture() {
  if ($(this).val() === "breakMinus" && breakTimer !== 0) {
    breakTimer = breakTimer - 1;
    $("#breakTime").html(breakTimer + ":00");

//WORKS - if the plus button is pressed for the break time increase the break time by 1 and show in min:sec format

  } else if ($(this).val() === "breakPlus") {
     breakTimer = breakTimer + 1;
     $("#breakTime").html(breakTimer + ":00");

//WORKS - if the minus button is pressed for session time reduce the 'break value' by 1 and show in min:sec format
//WORKS - don't let the number go below 0

  } else if ($(this).val() === "sessionMinus" && sessionTimer !== 0) {
    sessionTimer = sessionTimer - 1;
    $("#timer").html(sessionTimer + ":00");
    $("#sessionTime").html(sessionTimer + ":00");

//WORKS - if the plus button is pressed for session time increase the 'break value' by 1 and show in min:sec format

  } else if ($(this).val() === "sessionPlus") {
     sessionTimer = sessionTimer + 1;
     $("#timer").html(sessionTimer + ":00");
     $("#sessionTime").html(sessionTimer + ":00");

//WORKS - when the user presses the start button begin counting down the timer interval from its current value

  } else if ($(this).val() === "start") {
      inSeconds = sessionTimer * 60;  //convert the session time from minutes to seconds
      setInterval(timeIt, 1000);

//WORKS - reset the function to defaults when the reset button is pushed

  } else if ($(this).val() === "reset") {
    window.location.reload();
  }
});
});
