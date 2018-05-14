var redGridVEContract = artifacts.require("./redGridVEContract.sol");

module.exports = function(deployer) {
 deployer.deploy(redGridVEContract);
};
