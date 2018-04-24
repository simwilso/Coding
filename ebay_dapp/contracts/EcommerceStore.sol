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
  mapping (address => mapping (bytes32 => Bid)) bids;
 }

 //bid process and reveal setup struct to hold bid data
 struct Bid {
  address bidder;
  uint productId;
  uint value;
  bool revealed;
}

 //initialize store
 function EcommerceStore() public {
  productIndex = 0;
 }
 //add a product to the store
 function addProductToStore(string _name, string _category, string _imageLink, string _descLink, uint _auctionStartTime, uint _auctionEndTime, uint _startPrice, uint _ProductCondition) {
  productIndex += 1;  //increment the index by 1
  require(_auctionStartTime < _auctionEndTime); //ensure the start is less than end
  Product memory product = Product(productIndex, _name, _category, _imageLink, _descLink, _auctionStartTime, _auctionEndTime, _startPrice, 0, 0, 0, 0, ProductStatus.Open, ProductCondition(_ProductCondition));
  stores[msg.sender][productIndex] = product; //map the caller to the index.. which is mapped to the product above.
  productIdInStore[productIndex] = msg.sender; //map the index of the item to the caller.
 }

 //retrieve the product from the stores struct.. user looks up by productId.
 function getProduct(uint _productId) view public returns (uint, string, string, string, string, uint, uint, uint, ProductStatus, ProductCondition) {
  Product memory product = stores[productIdInStore[_productId]][_productId];
  return (product.id, product.name, product.category, product.imageLink, product.descLink, product.auctionStartTime,
      product.auctionEndTime, product.startPrice, product.status, product.condition);
}

 //this is the call when a bid is made..
 function bid(uint _productId, bytes32 _bid) payable public returns (bool) {
  Product storage product = stores[productIdInStore[_productId]][_productId];
  require (now >= product.auctionStartTime);
  require (now <= product.auctionEndTime);
  require (msg.value > product.startPrice);
  require (product.bids[msg.sender][_bid].bidder == 0);
  product.bids[msg.sender][_bid] = Bid(msg.sender, _productId, msg.value, false);
  product.totalBids += 1;
  return true;
}

 //when the auction ends this is the function to reveal the result
 function revealBid(uint _productId, string _amount, string _secret) public {
 Product storage product = stores[productIdInStore[_productId]][_productId];
 require (now > product.auctionEndTime);
 bytes32 sealedBid = sha3(_amount, _secret);

 Bid memory bidInfo = product.bids[msg.sender][sealedBid];
 require (bidInfo.bidder > 0);
 require (bidInfo.revealed == false);

 uint refund;

 uint amount = stringToUint(_amount);

 if(bidInfo.value < amount) {
  // They didn't send enough amount, they lost
  refund = bidInfo.value;
 } else {
  // If first to reveal set as highest bidder
  if (address(product.highestBidder) == 0) {
   product.highestBidder = msg.sender;
   product.highestBid = amount;
   product.secondHighestBid = product.startPrice;
   refund = bidInfo.value - amount;
  } else {
   if (amount > product.highestBid) {
    product.secondHighestBid = product.highestBid;
    product.highestBidder.transfer(product.highestBid);
    product.highestBidder = msg.sender;
    product.highestBid = amount;
    refund = bidInfo.value - amount;
   } else if (amount > product.secondHighestBid) {
    product.secondHighestBid = amount;
    refund = amount;
   } else {
    refund = amount;
   }
  }
 }
 product.bids[msg.sender][sealedBid].revealed = true;

 if (refund > 0) {
  msg.sender.transfer(refund);
 }
}

//getter and helper functions
function highestBidderInfo(uint _productId) view public returns (address, uint, uint) {
  Product memory product = stores[productIdInStore[_productId]][_productId];
  return (product.highestBidder, product.highestBid, product.secondHighestBid);
}

function totalBids(uint _productId) view public returns (uint) {
  Product memory product = stores[productIdInStore[_productId]][_productId];
  return product.totalBids;
}

function stringToUint(string s) pure private returns (uint) {
  bytes memory b = bytes(s);
  uint result = 0;
  for (uint i = 0; i < b.length; i++) {
    if (b[i] >= 48 && b[i] <= 57) {
      result = result * 10 + (uint(b[i]) - 48);
    }
  }
  return result;
}

}
