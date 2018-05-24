pragma solidity ^0.4.17;

contract EthMicroGrid {

// create the RRE Token

//      This array with all RRE balances
      mapping (address => uint256) public balanceOfRRE;

//      Initializes contract with initial supply RRE value - RRE initial value retrieved from dbase in real deployment
      function rreToken(
          uint256 initialSupply
          ) public {
          balanceOfRRE[msg.sender] = initialSupply;              // Give the creator all initial tokens
      }

//      Send coins
      function transferRRE(address _to, uint256 _value) public {
          require(balanceOfRRE[msg.sender] >= _value);           // Check if the sender has enough
          require(balanceOfRRE[_to] + _value >= balanceOfRRE[_to]); // Check for overflows
          balanceOfRRE[msg.sender] -= _value;                    // Subtract from the sender
          balanceOfRRE[_to] += _value;                           // Add the same to the recipient
      }

  //create the KWH Token

//      This creates an array with all balances
      mapping (address => uint256) public balanceOfKWH;

//      Initializes contract with initial supply tokens to the creator of the contract
      function kwhToken(
          uint256 initialSupply
          ) public {
          balanceOfKWH[msg.sender] = initialSupply;              // Give the creator all initial tokens
      }

// Send coins
      function transferKWH(address _to, uint256 _value) public {
          require(balanceOfKWH[msg.sender] >= _value);           // Check if the sender has enough
          require(balanceOfKWH[_to] + _value >= balanceOfKWH[_to]); // Check for overflows
          balanceOfKWH[msg.sender] -= _value;                    // Subtract from the sender
          balanceOfKWH[_to] += _value;                           // Add the same to the recipient
      }

//tester function
      function tester() public returns (string) {
        return "This works";
      }


}
