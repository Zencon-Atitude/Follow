const dotenv = require("dotenv");
dotenv.config();

// const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
// const META_DATA_URL = process.env.META_DATA_URL;
// const OWNER_ADDRESS = process.env.PUBLIC_ADDRESS;

const CONTRACT_ADDRESS = "0x03471874fa1569bEbE7f726654989B8Ca52646bC"
const META_DATA_URL = "ipfs://bafyreih6jqlplii55rnwftr3z7kgclpdl2tp4igmgod5kpgef24u5g5xoa/metadata.json"
const OWNER_ADDRESS = "0xa409C426F36a1C057A4E46B8ad8bA198753104F8"

// Loading the compiled contract JSON
const contractJson = require("../build/contracts/strategyNFT.json");

module.exports = async function (callback) {
  try {
    // web3 is injected by Truffle
    const contract = new web3.eth.Contract(
      contractJson.abi,
      CONTRACT_ADDRESS // this is the address generated when running migrate
    );

    // get the current network name to display in the log
    const network = await web3.eth.net.getNetworkType();

    // Get the first account from the HD wallet (you might want to handle account selection differently)
    const accounts = await web3.eth.getAccounts();
    const senderAddress = accounts[0];

    // Generate a transaction to call the `mintNFT` method
    const tx = contract.methods.mintNFT(OWNER_ADDRESS, META_DATA_URL);

    // Estimate gas and send the transaction to the network
    const gasEstimate = await tx.estimateGas({ from: senderAddress });
    const receipt = await tx
      .send({
        from: senderAddress,
        gas: gasEstimate,
      })
      .on("transactionHash", (txhash) => {
        console.log(`Mining transaction ...`);
        console.log(`https://${network}.etherscan.io/tx/${txhash}`);
      });

    // Check for errors and log success
    if (receipt.status === true) {
      console.log(
        `Success: The NFT has been minted and mined in block ${receipt.blockNumber}`
      );
    } else {
      console.error("Transaction failed.");
    }

    callback();
  } catch (error) {
    console.error(`An error happened: ${error}`);
    callback(error);
  }
};



// const dotenv = require("dotenv")
// dotenv.config()

// const CONTRACT_ADDRESS =  process.env.CONTRACT_ADDRESS
// const META_DATA_URL = process.env.META_DATA_URL
// const OWNER_ADDRESS = process.env.PUBLIC_ADDRESS

// // Loading the compiled contract Json
// const contractJson = require("../build/contracts/strategyNFT.json");

// module.exports = async function (callback) {
//   // web3 is injected by Truffle
//   const contract = new web3.eth.Contract(
//     contractJson.abi,
//     CONTRACT_ADDRESS, // this is the address generated when running migrate
//   );

//   // get the current network name to display in the log
//   const network = await web3.eth.net.getNetworkType();

//   // Generate a transaction to calls the `mintNFT` method
//   const tx = contract.methods.mintNFT(OWNER_ADDRESS, META_DATA_URL);
//   // Send the transaction to the network
//   const receipt = await tx
//     .send({
//       from: (await web3.eth.getAccounts())[0], // uses the first account in the HD wallet
//       gas: await tx.estimateGas(),
//     })
//     .on("transactionHash", (txhash) => {
//       console.log(`Mining transaction ...`);
//       console.log(`https://${network}.etherscan.io/tx/${txhash}`);
//     })
//     .on("error", function (error) {
//       console.error(`An error happened: ${error}`);
//       callback();
//     })
//     .then(function (receipt) {
//       // Success, you've minted the NFT. The transaction is now on chain!
//       console.log(
//         `Success: The NFT has been minted and mined in block ${receipt.blockNumber}`,
//       );
//       callback();
//     });
// };


// // async function mintNFT(contractAddress, metadataURL) {
// //     const NFT = await new web3.eth.Contract("NFT")

// //     const NFT = new web3.eth.Contract(
// //         contractJson.abi,
// //         CONTRACT_ADDRESS, // this is the address generated when running migrate
// //       );


// //     const [owner] = await ethers.getSigners()
// //     await NFT.attack(contractAddress).mintNFT(owner.address, metadataURL)
// //     console.log("NFT cunhado para: ", owner.address)
// // }


// // mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
// //     .then(() => process.exit(0))
// //     .catch((error) => {
// //         console.error(error);
// //         process.exit(1);
// //     });
    