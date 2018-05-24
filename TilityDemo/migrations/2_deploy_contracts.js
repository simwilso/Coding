var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var EthMicroGrid = artifacts.require("./EthMicroGrid.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.deploy(EthMicroGrid);
  deployer.link(ConvertLib, MetaCoin, EthMicroGrid);
  deployer.deploy(MetaCoin);
};
