const { NFTStorage, Blob } = require("nft.storage")
const fs = require("fs")
const dotenv = require("dotenv")
dotenv.config()

const API_KEY = process.env.NFT_STORAGE_API_KEY

async function storeAsset() {
    const client = new NFTStorage({token: API_KEY})
    
    // {
    //     name: 'strategyNFT',
    //     description: 'My NFT is very cool',
    //     image: new File(
    //         [await fs.promises.readFile('assets/strategy')],
    //         'strategy.js',
    //         {type: 'image/js'}
    
    try {
        // Leia o conteúdo do arquivo seu_arquivo.js
        const javascriptCode = fs.readFileSync('assets/strategy.js', 'utf-8');

        // Crie um Blob com o conteúdo lido do arquivo JavaScript
        const blob = new Blob([javascriptCode], { type: 'application/javascript' });

        // Armazene o blob na NFT.storage
        const cid = await client.storeBlob(blob);

        console.log('Arquivo JavaScript armazenado em Filecoin e IPFS. CID:', cid);
    } catch (error) {
        console.error('Erro ao armazenar o arquivo JavaScript:', error);
    }
}

storeAsset()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
