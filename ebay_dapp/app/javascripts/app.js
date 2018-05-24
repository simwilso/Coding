// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import ecommerce_store_artifacts from '../../build/contracts/EcommerceStore.json'

var EcommerceStore = contract(ecommerce_store_artifacts);

const ipfsAPI = require('ipfs-api');
const ethUtil = require('ethereumjs-util');

const ipfs = ipfsAPI({host: 'localhost', port: '5001', protocol: 'http'});

window.App = {
/*  // This if block should be with in the window.App = {} function
 if($("#product-details").length > 0) {
  //This is product details page
  let productId = new URLSearchParams(window.location.search).get('id');
  renderProductDetails(productId);
} */
 start: function() {

  var self = this;
  EcommerceStore.setProvider(web3.currentProvider);
  renderStore();

  $("#add-item-to-store").submit(function(event) {
   const req = $("#add-item-to-store").serialize();
   let params = JSON.parse('{"' + req.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
   let decodedParams = {}
   Object.keys(params).forEach(function(v) {
    decodedParams[v] = decodeURIComponent(decodeURI(params[v]));
   });
   saveProduct(reader, decodedParams);
   event.preventDefault();
  });

  var reader;

  $("#product-image").change(function(event) {
      const file = event.target.files[0]
      reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
    });


    function saveImageOnIpfs(reader) {
     return new Promise(function(resolve, reject) {
      const buffer = Buffer.from(reader.result);
      ipfs.add(buffer)
      .then((response) => {
       console.log(response)
       resolve(response[0].hash);
      }).catch((err) => {
       console.error(err)
       reject(err);
      })
     })
    }

    function saveTextBlobOnIpfs(blob) {
     return new Promise(function(resolve, reject) {
      const descBuffer = Buffer.from(blob, 'utf-8');
      ipfs.add(descBuffer)
      .then((response) => {
       console.log(response)
       resolve(response[0].hash);
      }).catch((err) => {
       console.error(err)
       reject(err);
      })
     })
    }

}

// This if block should be with in the window.App = {} function
  if($("#product-details").length > 0) {
   //This is product details page
   let productId = new URLSearchParams(window.location.search).get('id');
   renderProductDetails(productId);
  }

  function renderProductDetails(productId) {
 EcommerceStore.deployed().then(function(i) {
  i.getProduct.call(productId).then(function(p) {
   console.log(p);
   let content = "";
   ipfs.cat(p[4]).then(function(file) {
    content = file.toString();
    $("#product-desc").append("<div>" + content+ "</div>");
   });

   $("#product-image").append("<img src='https://ipfs.io/ipfs/" + p[3] + "' width='250px' />");
   $("#product-price").html(displayPrice(p[7]));
   $("#product-name").html(p[1].name);
   $("#product-auction-end").html(displayEndHours(p[6]));
   $("#product-id").val(p[0]);
   $("#revealing, #bidding").hide();
   let currentTime = getCurrentTimeInSeconds();
   if(currentTime < p[6]) {
    $("#bidding").show();
   } else if (currentTime - (60) < p[6]) {
    $("#revealing").show();
   }
  })
 })
}


function getCurrentTimeInSeconds(){
 return Math.round(new Date() / 1000);
}

function displayPrice(amt) {
 return 'Ξ' + web3.fromWei(amt, 'ether');
}


function displayEndHours(seconds) {
 let current_time = getCurrentTimeInSeconds()
 let remaining_seconds = seconds - current_time;

 if (remaining_seconds <= 0) {
  return "Auction has ended";
 }

 let days = Math.trunc(remaining_seconds / (24*60*60));

 remaining_seconds -= days*24*60*60
 let hours = Math.trunc(remaining_seconds / (60*60));

 remaining_seconds -= hours*60*60

 let minutes = Math.trunc(remaining_seconds / 60);

 if (days > 0) {
  return "Auction ends in " + days + " days, " + hours + ", hours, " + minutes + " minutes";
 } else if (hours > 0) {
  return "Auction ends in " + hours + " hours, " + minutes + " minutes ";
 } else if (minutes > 0) {
  return "Auction ends in " + minutes + " minutes ";
 } else {
  return "Auction ends in " + remaining_seconds + " seconds";
 }
}

}

function saveProduct(reader, decodedParams) {
  let imageId, descId;
  saveImageOnIpfs(reader).then(function(id) {
    imageId = id;
    saveTextBlobOnIpfs(decodedParams["product-description"]).then(function(id) {
      descId = id;
       saveProductToBlockchain(decodedParams, imageId, descId);
    })
 })
}

function saveProductToBlockchain(params, imageId, descId) {
  console.log(params);
  let auctionStartTime = Date.parse(params["product-auction-start"]) / 1000;
  let auctionEndTime = auctionStartTime + parseInt(params["product-auction-end"]) * 24 * 60 * 60

  EcommerceStore.deployed().then(function(i) {
    i.addProductToStore(params["product-name"], params["product-category"], imageId, descId, auctionStartTime,
   auctionEndTime, web3.toWei(params["product-price"], 'ether'), parseInt(params["product-condition"]), {from: web3.eth.accounts[0], gas: 440000}).then(function(f) {
   console.log(f);
   $("#msg").show();
   $("#msg").html("Your product was successfully added to your store!");
  })
 });
};





/*
  var reader;

    $("#product-image").change(function(event) {
      const file = event.target.files[0]
      reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
    });
    function saveImageOnIpfs(reader) {
     return new Promise(function(resolve, reject) {
      const buffer = Buffer.from(reader.result);
      ipfs.add(buffer)
      .then((response) => {
       console.log(response)
       resolve(response[0].hash);
      }).catch((err) => {
       console.error(err)
       reject(err);
      })
     })
    }
*/
/*    function saveTextBlobOnIpfs(blob) {
     return new Promise(function(resolve, reject) {
      const descBuffer = Buffer.from(blob, 'utf-8');
      ipfs.add(descBuffer)
      .then((response) => {
       console.log(response)
       resolve(response[0].hash);
      }).catch((err) => {
       console.error(err)
       reject(err);
      })
     })
    }
    $("#add-item-to-store").submit(function(event) {
   const req = $("#add-item-to-store").serialize();
   let params = JSON.parse('{"' + req.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
   let decodedParams = {}
   Object.keys(params).forEach(function(v) {
    decodedParams[v] = decodeURIComponent(decodeURI(params[v]));
   });
   saveProduct(reader, decodedParams);
   event.preventDefault();
});
 }
 function renderProductDetails(productId) {
  EcommerceStore.deployed().then(function(i) {
   i.getProduct.call(productId).then(function(p) {
    console.log(p);
    let content = "";
    ipfs.cat(p[4]).then(function(file) {
     content = file.toString();
     $("#product-desc").append("<div>" + content+ "</div>");
    });

    $("#product-image").append("<img src='https://ipfs.io/ipfs/" + p[3] + "' width='250px' />");
    $("#product-price").html(displayPrice(p[7]));
    $("#product-name").html(p[1].name);
    $("#product-auction-end").html(displayEndHours(p[6]));
    $("#product-id").val(p[0]);
    $("#revealing, #bidding").hide();
    let currentTime = getCurrentTimeInSeconds();
    if(currentTime < p[6]) {
     $("#bidding").show();
    } else if (currentTime - (60) < p[6]) {
     $("#revealing").show();
    }
   })
  })
 }
*/


/*

function saveProduct(reader, decodedParams) {
  let imageId, descId;
  saveImageOnIpfs(reader).then(function(id) {
    imageId = id;
    saveTextBlobOnIpfs(decodedParams["product-description"]).then(function(id) {
      descId = id;
       saveProductToBlockchain(decodedParams, imageId, descId);
    })
 })
}

function saveProductToBlockchain(params, imageId, descId) {
  console.log(params);
  let auctionStartTime = Date.parse(params["product-auction-start"]) / 1000;
  let auctionEndTime = auctionStartTime + parseInt(params["product-auction-end"]) * 24 * 60 * 60

  EcommerceStore.deployed().then(function(i) {
    i.addProductToStore(params["product-name"], params["product-category"], imageId, descId, auctionStartTime,
   auctionEndTime, web3.toWei(params["product-price"], 'ether'), parseInt(params["product-condition"]), {from: web3.eth.accounts[0], gas: 440000}).then(function(f) {
   console.log(f);
   $("#msg").show();
   $("#msg").html("Your product was successfully added to your store!");
  })
 });
}

*/

function renderStore() {
 EcommerceStore.deployed().then(function(i) {
  i.getProduct.call(1).then(function(p) {
   $("#product-list").append(buildProduct(p));
  });
  i.getProduct.call(2).then(function(p) {
   $("#product-list").append(buildProduct(p));
  });
 });
}

function buildProduct(product) {
 let node = $("<div/>");
 node.addClass("col-sm-3 text-center col-margin-bottom-1");
 node.append("<img src='https://ipfs.io/ipfs/" + product[3] + "' width='150px' />");
 node.append("<div>" + product[1]+ "</div>");
 node.append("<div>" + product[2]+ "</div>");
 node.append("<div>" + product[5]+ "</div>");
 node.append("<div>" + product[6]+ "</div>");
 node.append("<div>Ether " + product[7] + "</div>");
 return node;
}



window.addEventListener('load', function() {
 // Checking if Web3 has been injected by the browser (Mist/MetaMask)
 if (typeof web3 !== 'undefined') {
  console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
  // Use Mist/MetaMask's provider
  window.web3 = new Web3(web3.currentProvider);
 } else {
  console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
 }

 App.start();
});
