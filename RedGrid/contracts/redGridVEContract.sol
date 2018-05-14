pragma solidity ^0.4.18;

contract redGridVEContract {

// setup struct for each home in list

    struct UserDetails {
      uint id;
      uint pwrUsage;
      uint telcoUsage;
      uint waterUsage;
      uint xtlBalance;
    }

//central bank balance
    uint public pwrGenBalance = 10000;
    uint public telcoGenBalance = 10000;
    uint public waterGenBalance = 10000;

// counter for index
    uint public index;

//mapping of the sender to the struct so only they can access

    mapping (address => UserDetails) userInfo;

//function to set initial values of struct as solidity wont let me set a default
function setValues() {
  userInfo[msg.sender].pwrUsage = 100;
  userInfo[msg.sender].telcoUsage = 100;
  userInfo[msg.sender].waterUsage = 100;
}

//functions for consuming or producing pwr telco water
//power dashboard functions
  /*when a home presses the consume button their existing pwr balance will be reduced -5 per block time
  figure will reduce till it reaches 0 at which point it will begin 'borrowing' from the Gen
  only the message sender can review and initiate these actions
  when a home presses the produce button their existing pwr balance will increase +5 per block time
  figure will increase without limit
  only the message sender can review and initiate these actions */

function pwrConsume() returns (uint) {
  userInfo[msg.sender].pwrUsage = userInfo[msg.sender].pwrUsage - 5;
  return userInfo[msg.sender].pwrUsage;
}

function pwrProduce() returns (uint) {
  userInfo[msg.sender].pwrUsage = userInfo[msg.sender].pwrUsage + 5;
  return userInfo[msg.sender].pwrUsage;
}

//Telco dashboard functions
  /* includes functions for each of four users to define if they are
  consuming or producing credits. */

function telcoConsume() returns (uint) {}
function telcoProduce() returns (uint) {}

//Water dashboard functions
  /* includes functions for each of four homes to define if they are
  consuming or producing water. */

function waterConsume() returns (uint) {}
function waterProduce() returns (uint) {}

//functions for xtl token
  /* this section includes the functions that determine current XTL
  balance for each of the users.  this balance is determined from
  the users holdings on the blockchain of all the 'sub-tokens' above */

function homeTot() returns (uint) {
  userInfo[msg.sender].xtlBalance = userInfo[msg.sender].pwrUsage * userInfo[msg.sender].telcoUsage * userInfo[msg.sender].waterUsage;
  return (userInfo[msg.sender].xtlBalance);
}

//events

function consumeValue() returns (uint) {}

function produceValue() returns (uint) {}

}
