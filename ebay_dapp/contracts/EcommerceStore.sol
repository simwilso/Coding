pragma solidity ^0.4.13;

contract EcommerceStore {

//enums are user defined types stored as integers i.e. they will be stored as 0,1,2
 enum ProductStatus { Open, Sold, Unsold }
 enum ProductCondition { New, Used }

//this is just a reference for each product added
 uint public productIndex;

//which address added which product
 mapping (address => mapping(uint => Product)) stores;
//which products are in which merchants store
 mapping (uint => address) productIdInStore;

//list of all the products and their details
 struct Product {
  uint id;
  string name;
  string category;
  string imageLink;  //this will be an IPFS link so not to clog up the bchain
  string descLink;   //this will be an IPFS link so not to clog up the bchain
  uint auctionStartTime;
  uint auctionEndTime;
  uint startPrice;
  address highestBidder;
  uint highestBid;
  uint secondHighestBid;
  uint totalBids;
  ProductStatus status;
  ProductCondition condition;
 }

 //initialize store
 function EcommerceStore() public {
  productIndex = 0;
 }
}
