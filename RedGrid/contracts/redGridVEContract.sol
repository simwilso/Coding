pragma solidity ^0.4.18;

contract redGridVEContract {

//power balance
    uint public pwr1Balance = 100;
    uint public pwr2Balance = 100;
    uint public pwr3Balance = 100;
    uint public pwr4Balance = 100;
    uint public pwrGenBalance = 10000;
//telco balance
    uint public telco1Balance = 100;
    uint public telco2Balance = 100;
    uint public telco3Balance = 100;
    uint public telco4Balance = 100;
//water balance
    uint public water1Balance = 100;
    uint public water2Balance = 100;
    uint public water3Balance = 100;
    uint public water4Balance = 100;
//total balance
    uint public tot1Balance = pwr1Balance * telco1Balance * water1Balance;
    uint public tot2Balance = pwr2Balance * telco2Balance * water2Balance;
    uint public tot3Balance = pwr3Balance * telco3Balance * water3Balance;
    uint public tot4Balance = pwr4Balance * telco4Balance * water4Balance;

//power dashboard functions

/* includes functions for each of four homes to define if it is
consuming or producing power.. also includes a function for the
local generator */

function pwr1Consume() returns (uint) {
    pwr1Balance--;
    return pwr1Balance;
}

function pwr1Produce() returns (uint) {
    pwr1Balance++;
    return pwr1Balance;
}
function pwr2Consume() returns (uint) {
    pwr2Balance--;
    return pwr2Balance;
}

function pwr2Produce() returns (uint) {
    pwr2Balance++;
    return pwr2Balance;
}
function pwr3Consume() returns (uint) {
    pwr3Balance--;
    return pwr3Balance;
}

function pwr3Produce() returns (uint) {
    pwr3Balance++;
    return pwr3Balance;
}
function pwr4Consume() returns (uint) {
    pwr4Balance--;
    return pwr4Balance;
}

function pwr4Produce() returns (uint) {
    pwr4Balance++;
    return pwr4Balance;
}

//Telco dashboard functions

/* includes functions for each of four users to define if they are
consuming or producing credits. */

function telco1Consume() returns (uint) {

}
function telco1Produce() returns (uint) {

}
function telco2Consume() returns (uint) {

}
function telco2Produce() returns (uint) {

}
function telco3Consume() returns (uint) {

}
function telco3Produce() returns (uint) {

}
function telco4Consume() returns (uint) {

}
function telco4Produce() returns (uint) {

}

//Water dashboard functions

/* includes functions for each of four homes to define if they are
consuming or producing water. */

function water1Consume() returns (uint) {

}
function water1Produce() returns (uint) {

}
function water2Consume() returns (uint) {

}
function water2Produce() returns (uint) {

}
function water3Consume() returns (uint) {

}
function water3Produce() returns (uint) {

}
function water4Consume() returns (uint) {

}
function water4Produce() returns (uint) {

}

//define the xtl token and functions

/* this section includes the functions that determine current XTL
balance for each of the users.  this balance is determined from
the users holdings on the blockchain of all the 'sub-tokens' above */

function user1Tot(uint pwr1Balance, uint telco1Balance, uint water1Balance) returns (uint) {
}
function user2Tot(uint pwr2Balance, uint telco2Balance, uint water2Balance) returns (uint) {
}
function user3Tot(uint pwr3Balance, uint telco3Balance, uint water3Balance) returns (uint) {
}
function user4Tot(uint pwr4Balance, uint telco4Balance, uint water4Balance) returns (uint) {
}

}
