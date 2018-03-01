$(document).ready(function() {
//javascript
var first = 0;
var second = 0
var total = first * second;


$(".AC").on("click", function() {
  console.log("AC button pushed");
  $("#screen").html("AC");
})
$(".CE").on("click", function() {
  console.log("CE button pushed");
  $("#screen").html("CE");
})
$(".Divide").on("click", function() {
  console.log("Divide button pushed");
  $("#screen").html("Divide");
})
$(".Multiply").on("click", function() {
  console.log("Multiply button pushed");
  $("#screen").html("Multiply");
})

$(".Seven").on("click", function() {
  console.log("Seven button pushed");
  first = 7;
  $("#screen").html(total);
})
$(".Eight").on("click", function() {
  console.log("Eight button pushed");
  second = 8;
  $("#screen").html(total);
})
$(".Nine").on("click", function() {
  console.log("Nine button pushed");
  $("#screen").html("Nine");
})
$(".Subtract").on("click", function() {
  console.log("Subtract button pushed");
  $("#screen").html("Subtract");
})

$(".Four").on("click", function() {
  console.log("Four button pushed");
  $("#screen").html("Four");
})
$(".Five").on("click", function() {
  console.log("Five button pushed");
  $("#screen").html("Five");
})
$(".Six").on("click", function() {
  console.log("Six button pushed");
  $("#screen").html("Six");
})
$(".Add").on("click", function() {
  console.log("Add button pushed");
  $("#screen").html("Add");
})

$(".One").on("click", function() {
  console.log("One button pushed");
  $("#screen").html("One");
})
$(".Two").on("click", function() {
  console.log("Two button pushed");
  $("#screen").html("Two");
})
$(".Three").on("click", function() {
  console.log("Three button pushed");
  $("#screen").html("Three");
})
$(".Equals").on("click", function() {
  console.log("Equals button pushed");
  $("#screen").html("Equals");
})

$(".Zero").on("click", function() {
  console.log("Zero button pushed");
  $("#screen").html("Zero");
})
$(".Period").on("click", function() {
  console.log("Period button pushed");
  $("#screen").html("Period");
})
});
