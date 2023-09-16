const strategyNFT = artifacts.require("strategyNFT");

module.exports = function(deployer) {
    deployer.deploy(strategyNFT);
};