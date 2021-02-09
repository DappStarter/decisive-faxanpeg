require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain slow journey arena orchard slam'; 
let testAccounts = [
"0xcda5b2804a647f5ff55c8d20863df961ef659f4e31a22960bc4968703942c950",
"0x282238c5f6211e3b38a2602d9322596515679ebf75f6c6eba3c0ca2129698a92",
"0xef7750b115eb7fde474707cb1ac005d8430aba0ad293186aa08874e6fe444d90",
"0x7ce44c3429b5f8008c2ad4d43581e3833d517a996427fc0c8c77500d0a91601a",
"0xf4e70560641355df49354549bb4571d9c1c624c7b3d52789f37191353af40d95",
"0x41bbda33e0dcb2f05364e658280030fe1a96fc205171de7cb4bf65942dddab59",
"0xe0163b7c95e38882463e4d073bd897ac5f018af928568994d5be460f007ebe0e",
"0xd85226ca95d22b0e66a6da3163c63ed0f3d250bae8329bcff37a69089cf6fe6c",
"0x5d3fb6ff572e8329cf1565ddabc47ea9276ab523efa17cec33cc8b953b76cd95",
"0x2a3ea68b89839b657ec9944bcd774f8031990497a042635a71e6e0c456ca99bf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
