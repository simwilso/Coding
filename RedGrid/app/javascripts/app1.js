$(document).ready(function redgridve() {

// Import libraries we need.
 import "../stylesheets/app1.css";
 import { default as Web3 } from 'web3';
 import { default as contract } from 'truffle-contract';

/*when user selects from dropdown menu this will update the code so that the settings interact
with the relevant blockchain testnet they have selected.  for example if the user selects Ethereum
the code will ensure that balances/functions etc are all ethereum relevant */

$("select").change(function(){

//user has selected ethereum
  if ($(this).val() === "ethereum") {
    console.log("ethereum");
    $("#genBalance").html("eth");


    /* ethereum web3 items */
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }


    /* need to specify the default Eth account to use. */

    web3.eth.defaultAccount = web3.eth.accounts[0];

    /* need to inject interface to our contract via the abi */

    var redGridVEContract = web3.eth.contract([]);

    /* define the contract address */

    var redGridVE = redGridVEContract.at(0xadb9f21891f24bf53d4e3d82a62caaefecfa251a);
    console.log(redGridVE);








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

/* once the user has selected their blockchain when they click the consume or produce button
next to the hm transactions with the selected blockchain will be created */

$("button").click(function capture() {

  if ($(this).val() === "hm1Consume") {
    console.log("hm1Consume");
    $("#hm1Produce").css('color',"white");        //put corresponding button back to orig
    $(this).css('color','black');                 //change color of selected button
    $("#genBalance").html("hm1C");                //update the generator balance
    $("#hm1Balance").html("C");                //update the hm1 balance
  } else if ($(this).val() === "hm1Produce") {
    console.log("hm1Produce");
    $("#hm1Consume").css('color',"white");
    $(this).css('color','black');
    $("#genBalance").html("hm1P");
    $("#hm1Balance").html("P");
  } else if ($(this).val() === "hm2Consume") {
    console.log("hm2Consume");
    $("#hm2Produce").css('color',"white");
    $(this).css('color','black');
    $("#genBalance").html("hm2C");
    $("#hm2Balance").html("C");
  } else if ($(this).val() === "hm2Produce") {
    console.log("hm2Produce");
    $("#hm2Consume").css('color',"white");
    $(this).css('color','black');
    $("#genBalance").html("hm2P");
    $("#hm2Balance").html("P");
  } else if ($(this).val() === "hm3Consume") {
    console.log("hm3Consume");
    $("#hm3Produce").css('color',"white");
    $(this).css('color','black');
    $("#genBalance").html("hm3C");
    $("#hm3Balance").html("C");
  } else if ($(this).val() === "hm3Produce") {
    console.log("hm3Produce");
    $("#hm3Consume").css('color',"white");
    $(this).css('color','black');
    $("#genBalance").html("hm3P");
    $("#hm3Balance").html("P");
  } else if ($(this).val() === "hm4Consume") {
    console.log("hm4Consume");
    $("#hm4Produce").css('color',"white");
    $(this).css('color','black');
    $("#genBalance").html("hm4C");
    $("#hm4Balance").html("C");
  } else if ($(this).val() === "hm4Produce") {
    console.log("hm4Produce");
    $("#hm4Consume").css('color',"white");
    $(this).css('color','black');
    $("#genBalance").html("hm4P");
    $("#hm4Balance").html("P");
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
