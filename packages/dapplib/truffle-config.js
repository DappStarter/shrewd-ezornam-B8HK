require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift razor trust unusual hover arena equal gate'; 
let testAccounts = [
"0x42bd351ceaee6a0e46c38cb718518c0810b4a84a7c28609e8684ef94fc31b2f8",
"0x5a7c79b25c60701c268f068b84b63629ca7ba2f45baf5f984b350d3ddda01b82",
"0x1e943fcc878a96e5081dd967faf6ec0284337fc04720755f9268a933f7b4d783",
"0x7233446c785b728023b52e57552d3462a44b74c360d230129ca930f5a7b3b7f3",
"0xc34fa289d3533910164df538ee36d3e4fb8c4ac650d4e119ebec4604cc6f2a99",
"0xf009d820ae231c41ac1f5038b622f11d9ce009bd83975665dd7a4841a7d9a275",
"0x2a49006c3e70f2dd9c87410abe7d56132857dcf69d3afa81e01284e8c4809129",
"0x4bc1214e6f568d54cf12461fb0b51d3153ebb656068459542652d29309c8cb65",
"0x6ad285ba1273f8eb5d7f9f0dc9a77c46c34bc4fd78678a0c5ea4b0e7d19a64b5",
"0x113a16bbaa33559befd0a4593fa4c9a1aa28319eb414f7b3319495dde854c1f3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


