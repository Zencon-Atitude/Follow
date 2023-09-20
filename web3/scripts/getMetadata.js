const { ethers } = require('hardhat');
const axios = require('axios');

const contractAddress = "0xC590267a58ad81028b05d9Bc7F8A6c492562A184" //process.env.CONTRACT_ADDRESS

async function getStrategyByTokenId(contractAddress, tokenId) {
    const NFT = await ethers.getContractFactory("strategyNFT")

    const metadataURL = await NFT.attach(contractAddress).getStrategyByTokenId(tokenId)
    const cleanMetadataURL = metadataURL.replace('ipfs://', '')

    const gateway = 'https://ipfs.io/ipfs/' + cleanMetadataURL;

    const response = await axios.get(gateway);
    const metadata = response.data;


    eval(metadata);

    helloWorld()

    console.log("Code in the NFT: ", metadata)
}


getStrategyByTokenId(contractAddress, '1')
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });