async function main() {  
  const subscriptionNFT = await ethers.getContractFactory("subscriptionNFT")
  const nft = await subscriptionNFT.deploy()
  await nft.deployed()

  const txHash = nft.deployTransaction.hash
  const txReceipt = await ethers.provider.waitForTransaction(txHash)
  contractAddress = txReceipt.contractAddress

  console.log("contract deployed at address:", contractAddress)
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exit(1);
});
