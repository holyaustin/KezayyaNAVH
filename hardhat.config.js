require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const INFURA_API_KEY  = process.env.INFURA_API_KEY;

console.log('INFURA_API_KEY', INFURA_API_KEY);

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },

// https://linea-goerli.infura.io/v3/6267301a0e4f45bba53da68906ecfd7c
    linea: {
      url: `https://linea-goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
// https://linea-mainnet.infura.io/v3/6267301a0e4f45bba53da68906ecfd7c
    linea_mainnnet: {
      url: `https://linea-goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },

  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
