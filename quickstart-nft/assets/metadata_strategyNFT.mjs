import { File } from "nft.storage"
import fs from "fs"

const NFTMetadata = {
    name: 'strategyNFT',
    description: 'My NFT is a strategy',
    image: new File(
        [await fs.promises.readFile('assets/zencon.jpeg')],
        'zencon.jpeg',
        {type: 'image/jpeg'}
    ),
    strategy: {var1: 'test1', var2: 'test1'},
}

export default NFTMetadata;