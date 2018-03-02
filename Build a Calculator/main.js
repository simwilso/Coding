$(document).ready(function() {

//javascript

//setup the global variables
var operator = "";
var firstArr = [];
var secondArr = [];
var result = 0;

//need to push digits entered to an array until we detect an operator at which point start logging second array
$(":button").click(function() {

  if ($(this).val() === "/") {
    //set operator and then start capturing second if statement to capture second array
    operator = "/";
    firstArr.push($(this).val());
  } else if ($(this).val() === "*") {
    //set operator and then start capturing second if statement to capture second array
    operator = "*";
    firstArr.push($(this).val());
  } else if ($(this).val() === "-") {
    //set operator and then start capturing second if statement to capture second array
    operator = "-";
    firstArr.push($(this).val());
  } else if ($(this).val() === "+") {
    //set operator and then start capturing second if statement to capture second array
    operator = "+";
    firstArr.push($(this).val());
  } else if ($(this).val() === "=") {
    //find the operator in the array
    //create an integer of digits before the operator
    //create an integer of the digits after the operator
    //do the calcs

    //display the result
    $("#screen").replaceWith(result);

  } else {
    firstArr.push($(this).val());
  }


/*
//then need to join the arrays and complete the function do the calculation WORKS
var first = firstArr.join("");
var firstInt = parseInt(first);
var second = secondArr.join("");
var secondInt = parseInt(second);

if (operator === "/") {
  result = firstInt / secondInt;
} else if (operator === "*") {
  result = firstInt * secondInt;
} else if (operator === "-") {
  result = firstInt - secondInt;
} else if (operator === "+") {
  result = firstInt + secondInt;
}
*/
//console.log(firstArr);
$("#screen").html(firstArr.join(""));
});
});
