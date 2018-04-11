pragma solidity ^0.4.17;

contract Adoption {

// Address variable for adopters.  This is an array of 16 'addresses'.
address[16] public adopters;

// Adopting a pet - add the eth public address of the adopter to the array then return the array.
function adopt(uint petId) public returns (uint) {
  require(petId >= 0 && petId <= 15);

  adopters[petId] = msg.sender;

  return petId;
}

// Retrieving the adopters
function getAdopters() public view returns (address[16]) {
  return adopters;
}

}
