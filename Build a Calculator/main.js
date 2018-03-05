$(document).ready(function calculator() {

// WORKS - javascript

//setup my global variables
var array = [];
//var operatorPos = [];
var numbers = {};
var result = 0;

// WORKS - function to push elements into an array

$(":button").click(function capture() {
  if ($(this).val() !== "Clear" && $(this).val() !== "=") {
    array.push($(this).val());
    $("#screen").html(array.join(""));

// WORKS - function for the clear button

  } else if ($(this).val() === "Clear") {
     array = [];
     $("#screen").html("0");

// WORKS - if equals sign hit then calculate

} else {
console.log(array);
$("#screen").html(eval(array.join("")));
};
});
});
