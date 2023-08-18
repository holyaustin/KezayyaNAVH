require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
   
    testnet: {
      url: process.env.OPBNB_RPC_TESTNET, // https://opbnb-testnet-rpc.bnbchain.org
      accounts: [process.env.PRIVATE_KEY],
    },

    mainnet: {
      url: process.env.OPBNB_RPC_MAINNET, // https://opbnb-mainnet-rpc.bnbchain.org
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
