$(document).ready(function pomodoro() {

// JAVASCRIPT

// SETUP GLOBAL VARIABLES
var breakTimer = 5;
var sessionTimer = 30;


// SETUP FUNCTIONS

//WORKS - countup and countdown the break timer
  //psuedocode - if - button is pushed reduce TIME... if + is pushed increase time




//WORKS - countup and countdown the session timer
  //psuedocode - if - button is pushed reduce TIME... if + is pushed increase time

//start the session timer countdown
  //psuedocode - if button is pushed begin counting down the session time to zero
  //psuedocode - when the timer reaches zero sound alarm and change screen color

//reset the session timer countdown
  //psuedocode - if the button is pushed reset the session time to session time..restart the function.



$(":button").click(function capture() {
  if ($(this).val() === "breakMinus" && breakTimer !== 0) {
    breakTimer = breakTimer - 1;
    $("#breakTime").html(breakTimer);

  } else if ($(this).val() === "breakPlus") {
     breakTimer = breakTimer + 1;
     $("#breakTime").html(breakTimer);

  } else if ($(this).val() === "sessionMinus" && sessionTimer !== 0) {
    sessionTimer = sessionTimer - 1;
    $("#timer").html(sessionTimer);
    $("#sessionTime").html(sessionTimer);

  } else if ($(this).val() === "sessionPlus") {
     sessionTimer = sessionTimer + 1;
     $("#timer").html(sessionTimer);
     $("#sessionTime").html(sessionTimer);
  } else if ($(this).val() === "start") {
    //countdown 'sessionTimer' from current value to zero updating timer value every second

  } else if ($(this).val() === "reset") {
    //reset the 'sessionTimer' to 30, reset 'timer' to 30, reset 'breakTimer' to 5
    breakTimer = 5;
    sessionTimer = 30;
    $("#timer").html(sessionTimer);
    $("#sessionTime").html(sessionTimer);
    $("#breakTime").html(breakTimer);
  }

});
});
