const { ethers } = require('hardhat');

const contractAddress = "0xC590267a58ad81028b05d9Bc7F8A6c492562A184" //process.env.CONTRACT_ADDRESS
const metadataURL = "bafkreihhqghujo6xahi2tziwf4ozihi2vo3guw6z7rjteqwxopyk3cal54" //process.env.IPFS_URI

async function mintStrategyNFT(contractAddress, metadataURL) {
    const NFT = await ethers.getContractFactory("strategyNFT")

    const [owner] = await ethers.getSigners()
    await NFT.attach(contractAddress).mintStrategyNFT(owner.address, metadataURL)
    console.log("NFT minted for: ", owner.address)
}

mintStrategyNFT(contractAddress, metadataURL)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
