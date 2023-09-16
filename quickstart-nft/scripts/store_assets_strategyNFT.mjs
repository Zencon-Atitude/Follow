import { NFTStorage } from "nft.storage"
import NFTMetadata from '../assets/metadata_strategyNFT.mjs'
import dotenv from "dotenv"
dotenv.config()

const API_KEY = process.env.NFT_STORAGE_API_KEY

async function storeAsset() {
    const client = new NFTStorage({token: API_KEY})
    
    //We can create the metadata files in mjs and pass them to the store function
    const metadata = await client.store(NFTMetadata)

    //The ipfs url of the stored metadata can be returned 
    //so that the program can associate it with the nft when minting
    console.log('Metadata stored in Filecoin and IPFS in the URL:', metadata.url)
}

storeAsset()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
    