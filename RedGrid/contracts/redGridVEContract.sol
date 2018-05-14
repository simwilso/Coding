pragma solidity ^0.4.18;

contract redGridVEContract {

// setup array for each home in list
    uint[4] public HomeArray = [100, 100, 100, 100000];


//central bank balance
    uint public pwrGenBalance = 10000;
    uint public telcoGenBalance = 10000;
    uint public waterGenBalance = 10000;

// counter for index


//mapping of the sender to the array so only they can access
    mapping (address => uint[4]) homeOwnerDetails;

//functions for consuming or producing pwr telco water

//power dashboard functions

/*
when a home presses the consume button their existing pwr balance will be reduced -5 per block time
figure will reduce till it reaches 0 at which point it will begin 'borrowing' from the Gen
only the message sender can review and initiate these actions

when a home presses the produce button their existing pwr balance will increase +5 per block time
figure will increase without limit
only the message sender can review and initiate these actions
 */

function pwrConsume() returns (uint) {
  HomeArray[0] = HomeArray[0] - 5;
  return HomeArray[0];
}

function pwrProduce() returns (uint) {
  HomeArray[0] = HomeArray[0] + 5;
  return HomeArray[0];
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

function homeTot() returns (uint, uint, uint, uint) {
 return (HomeArray[0], HomeArray[1], HomeArray[2], HomeArray[3]);
}

//events

function consumeValue() returns (uint) {}

function produceValue() returns (uint) {}

}
