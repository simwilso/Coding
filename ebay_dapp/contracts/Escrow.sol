pragma solidity ^0.4.13;

contract Escrow {

uint public productId;

address public buyer;
address public seller;
address public arbiter;

mapping (address => bool) releaseAmount;
mapping (address => bool) refundAmount;

uint public releaseCount;
uint public refundCount;

function Escrow(uint _productId, address _buyer, address _seller, address _arbiter) payable public {
  productId = _productId;
  buyer = _buyer;
  seller = _seller;
  arbiter = _arbiter;
}

}
