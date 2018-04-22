pragma solidity ^0.4.13;

contract energyTrading {

//variables defined

//struct of balances mapped to addresses
    struct ledger {
        string homeAddress;
        int balance;
        uint dailyLimit;
    }

//need to create a mapping of address (msg.sender) to balance
    mapping (address => ledger) accounts;

    address private owner = msg.sender;

//need to create a require function that only the owner of the balance can update it
    modifier ownerOnly {
        require(owner == msg.sender);
        _;
    }

//functions defined

    //new user functions
    function newUser(string _homeAddress, uint _dailyLimit) returns (string) {
       accounts[msg.sender].homeAddress = _homeAddress;
       accounts[msg.sender].dailyLimit = _dailyLimit;
       return accounts[msg.sender].homeAddress;
    }

    //deposit functions
    function deposit(uint _deposit) /*ownerOnly*/ {
        accounts[msg.sender].balance += _deposit;
    }
    //withdraw functions
    function withdraw(uint _withdraw) /*ownerOnly*/ {
        accounts[msg.sender].balance -= _withdraw;
    }
    //get balance function
    function getBalance() /*ownerOnly*/ returns (uint) {
        return accounts[msg.sender].balance;
    }
}
