$(document).ready(function redgridve() {

/*when user selects from dropdown menu this will query the relevant
blockchain to interact with. */

$("select").change(function(){
  if ($(this).val() === "ethereum") {
    console.log("ethereum");
    $("#genBalance").html("eth");
  } else if ($(this).val() === "bitcoin") {
    console.log("bitcoin");
    $("#genBalance").html("btc");
  } else if ($(this).val() === "nem") {
    console.log("nem");
    $("#genBalance").html("nem");
  } else if ($(this).val() === "stellar") {
    console.log("stellar");
    $("#genBalance").html("stellar");
  } else if ($(this).val() === "cosmos") {
    console.log("cosmos");
    $("#genBalance").html("cosmos");
  } else if ($(this).val() === "hashgraph") {
    console.log("hashgraph");
    $("#genBalance").html("hashgraph");
  } else if ($(this).val() === "kadena") {
    console.log("kadena");
    $("#genBalance").html("kadena");
  }
});

/* when the user clicks the consume or produce button next to the hm
this will start flagging transactions with the selected blockchain */

$("button").click(function capture() {

  if ($(this).val() === "hm1Consume") {
    console.log("hm1Consume");
    $("#genBalance").html("hm1C");
  } else if ($(this).val() === "hm1Produce") {
    console.log("hm1Produce");
    $("#genBalance").html("hm1P");
  } else if ($(this).val() === "hm2Consume") {
    console.log("hm2Consume");
    $("#genBalance").html("hm2C");
  } else if ($(this).val() === "hm2Produce") {
    console.log("hm2Produce");
    $("#genBalance").html("hm2P");
  } else if ($(this).val() === "hm3Consume") {
    console.log("hm3Consume");
    $("#genBalance").html("hm3C");
  } else if ($(this).val() === "hm3Produce") {
    console.log("hm3Produce");
    $("#genBalance").html("hm3P");
  } else if ($(this).val() === "hm4Consume") {
    console.log("hm4Consume");
    $("#genBalance").html("hm4C");
  } else if ($(this).val() === "hm4Produce") {
    console.log("hm4Produce");
    $("#genBalance").html("hm4P");
  }
});

});


// Import libraries we need.
 //import { default as Web3} from 'web3';
 //import { default as contract } from 'truffle-contract';

// Import our contract artifacts and turn them into usable abstractions.
 //import metacoin_artifacts from '../../build/contracts/MetaCoin.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
 //var MetaCoin = contract(metacoin_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
 //var accounts;
 //var account;

/*
window.App = {
  start: function() {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    MetaCoin.setProvider(web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      account = accounts[0];

      self.refreshBalance();
    });
  },

  setStatus: function(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  },

  refreshBalance: function() {
    var self = this;

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.getBalance.call(account, {from: account});
    }).then(function(value) {
      var balance_element = document.getElementById("balance");
      balance_element.innerHTML = value.valueOf();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting balance; see log.");
    });
  },

  sendCoin: function() {
    var self = this;

    var amount = parseInt(document.getElementById("amount").value);
    var receiver = document.getElementById("receiver").value;

    this.setStatus("Initiating transaction... (please wait)");

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.sendCoin(receiver, amount, {from: account});
    }).then(function() {
      self.setStatus("Transaction complete!");
      self.refreshBalance();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error sending coin; see log.");
    });
  }
};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
  }

  App.start();
});
*/
