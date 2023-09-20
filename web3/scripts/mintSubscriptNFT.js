const { ethers } = require('hardhat');

const contractAddress = "0x923BD8EBD9FDb261046A7D163297931E8B71E6Dd" //process.env.CONTRACT_ADDRESS
const strategyTokenId = 1

async function mintSubscriptionNFT(contractAddress, strategyTokenId) {
    const NFT = await ethers.getContractFactory("subscriptionNFT")

    const [owner] = await ethers.getSigners()
    await NFT.attach(contractAddress).mintSubscriptionNFT(owner.address, strategyTokenId)
    console.log("NFT minted for: ", owner.address)
}

mintSubscriptionNFT(contractAddress, strategyTokenId)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
