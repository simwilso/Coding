$(document).ready(function() {

//donor user variables
var userBalance = 100;
var activeDonations = 1000;

//recipient amount required variables
var primaryAmountReq = 10;
var hospitalAmountReq = 10;
var groceryAmountReq = 10;
var footballAmountReq = 10;

//recipient usage current balance variables
// this variable will decrement through a loop based on usage rate
var primaryBalance = 30;
var hospitalBalance = 5000;
var groceryBalance = 20;
var footballBalance = 10;
//recipient usage consumption rate per day
var primaryUsage = 20;
var hospitalUsage = 35;
var groceryUsage = 5;
var footballUsage = 10;

//check
console.log("start");

//update user specific details balance and active donations on webpage
$("#USER_BALANCE").html("$" + userBalance);
$("#ACTIVE_DONATIONS").html("$" + activeDonations);

//update our recipient specific requirements in table on webpage
$("#REQ_PS").html("$" + primaryAmountReq);
$("#REQ_GP").html("$" + hospitalAmountReq);
$("#REQ_ST").html("$" + groceryAmountReq);
$("#REQ_FC").html("$" + footballAmountReq);

//update our recipient specific usage rates in table on webpage
$("#BALANCE_PS").html("$" + primaryBalance + ", $" + primaryUsage);
$("#BALANCE_GP").html("$" + hospitalBalance + ", $" + hospitalUsage);
$("#BALANCE_ST").html("$" + groceryBalance + ", $" + groceryUsage);
$("#BALANCE_FC").html("$" + footballBalance + ", $" + footballUsage);

//check
console.log("update page fields with current")

//donate buttons pushed
/*
when button is pushed it will take the number entered into the field and will
- check that the available 'user balance' is sufficient
- 'withdraw' the amount from user balance and update field on page
- 'add' the amount to the active donations balance for the user
- 'send' the amount to the relevant recipient and reflect balance change in their balance.
- otherwise error 'insufficient SOL balane'
*/

//user donates to primary school
$("#DONATE_PS").on("click", function() {
      console.log("donate ps button pushed");
      var AmountNumber = Number(document.getElementById("AMOUNT_PS").value);

      if (userBalance >= AmountNumber) {
        console.log("so far so good" + AmountNumber);

        userBalance = userBalance - AmountNumber;
        $("#USER_BALANCE").html("$" + userBalance);

        activeDonations = activeDonations + AmountNumber;
        $("#ACTIVE_DONATIONS").html("$" + activeDonations);

        primaryAmountReq = primaryAmountReq - AmountNumber;
        $("#REQ_PS").html("$" + primaryAmountReq);

        primaryBalance = primaryBalance + AmountNumber;
        $("#BALANCE_PS").html("$" + primaryBalance + ", $" + primaryUsage);


      } else {
        console.log("insufficient funds - " + AmountNumber);
      }
});

//user donates to the doctor hospital cause
$("#DONATE_GP").on("click", function() {
  console.log("donate gp button pushed");
  var AmountNumber = Number(document.getElementById("AMOUNT_GP").value);

  if (userBalance >= AmountNumber) {
    console.log("so far so good" + AmountNumber);

    userBalance = userBalance - AmountNumber;
    $("#USER_BALANCE").html("$" + userBalance);

    activeDonations = activeDonations + AmountNumber;
    $("#ACTIVE_DONATIONS").html("$" + activeDonations);

    hospitalAmountReq = hospitalAmountReq - AmountNumber;
    $("#REQ_GP").html("$" + hospitalAmountReq);

    hospitalBalance = hospitalBalance + AmountNumber;
    $("#BALANCE_GP").html("$" + hospitalBalance + ", $" + hospitalUsage);


  } else {
    console.log("insufficient funds - " + AmountNumber);
  }
});


//user donates to the grocery store cause
$("#DONATE_ST").on("click", function() {
  console.log("donate st button pushed");
  var AmountNumber = Number(document.getElementById("AMOUNT_ST").value);

  if (userBalance >= AmountNumber) {
    console.log("so far so good" + AmountNumber);

    userBalance = userBalance - AmountNumber;
    $("#USER_BALANCE").html("$" + userBalance);

    activeDonations = activeDonations + AmountNumber;
    $("#ACTIVE_DONATIONS").html("$" + activeDonations);

    groceryAmountReq = groceryAmountReq - AmountNumber;
    $("#REQ_ST").html("$" + groceryAmountReq);

    groceryBalance = groceryBalance + AmountNumber;
    $("#BALANCE_ST").html("$" + groceryBalance + ", $" + groceryUsage);


  } else {
    console.log("insufficient funds - " + AmountNumber);
  }
});


//user donates to the football club cause
$("#DONATE_FC").on("click", function() {
  console.log("donate fc button pushed");
  var AmountNumber = Number(document.getElementById("AMOUNT_FC").value);

  if (userBalance >= AmountNumber) {
    console.log("so far so good" + AmountNumber);

    userBalance = userBalance - AmountNumber;
    $("#USER_BALANCE").html("$" + userBalance);

    activeDonations = activeDonations + AmountNumber;
    $("#ACTIVE_DONATIONS").html("$" + activeDonations);

    footballAmountReq = footballAmountReq - AmountNumber;
    $("#REQ_FC").html("$" + footballAmountReq);

    footballBalance = footballBalance + AmountNumber;
    $("#BALANCE_FC").html("$" + footballBalance + ", $" + footballUsage);


  } else {
    console.log("insufficient funds - " + AmountNumber);
  }
});
});
