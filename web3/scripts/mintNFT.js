const { ethers } = require('hardhat');

const contractAddress = "0x14C23065A83D65F82f89894354fe01fEaa667fB4" //process.env.CONTRACT_ADDRESS
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
