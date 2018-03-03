$(document).ready(function calculator() {

//javascript

//setup the global variables
var operator = "";
var indexOfOp = "";
var stringArr = "";
var beforeOp = "";
var afterOp = "";
var firstArr = [];
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
  } else if ($(this).val() === "Clear") {
    //clear the form and screen if AC or CE is pressed
    $("#screen").replaceWith("");
    calculator();
    return;

  } else if ($(this).val() === "=") {
    //find the operator in the array
    stringArr = firstArr.join("");
    indexOfOp = stringArr.search(/[*/+-]/);
    //create an integer of digits before the operator
    beforeOp = parseInt(stringArr.slice(0, indexOfOp));
    //create an integer of the digits after the operator
    afterOp = parseInt(stringArr.slice(indexOfOp + 1));
    //do the calcs
    if (operator === "/") {
      result = beforeOp / afterOp;
    } else if (operator === "*") {
      result = beforeOp * afterOp;
    } else if (operator === "-") {
      result = beforeOp - afterOp;
    } else if (operator === "+") {
      result = beforeOp + afterOp;
    }
    console.log(result);
    //display the result
    $("#screen").replaceWith(result);
  } else {
    firstArr.push($(this).val());
  }
$("#screen").html(firstArr.join(""));
});
});
