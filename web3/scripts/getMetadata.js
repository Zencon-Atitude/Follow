const { ethers } = require('hardhat');
const axios = require('axios');

const contractAddress = "0x14C23065A83D65F82f89894354fe01fEaa667fB4" //process.env.CONTRACT_ADDRESS

async function getMetadata(contractAddress, tokenId) {
    const NFT = await ethers.getContractFactory("strategyNFT")

    const metadataURL = await NFT.attach(contractAddress).getNFTMetadata(tokenId)
    const cleanMetadataURL = metadataURL.replace('ipfs://', '')

    const gateway = 'https://ipfs.io/ipfs/' + cleanMetadataURL;

    const response = await axios.get(gateway);
    const metadata = response.data;


    eval(metadata);

    helloWorld()

    console.log("Code in the NFT: ", metadata)
}


getMetadata(contractAddress, '1')
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });