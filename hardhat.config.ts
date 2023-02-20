import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";
import "./tasks/block-number";
import "hardhat-gas-reporter";
import "solidity-coverage";

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337, //its same to hardhat
      // we don't have to set the accounts,because when we run hardhat node,it will automatically give us 10 accounts
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  },
  // gasReporter: {
  //   // enabled: true,
  //   enabled: false,
  //   outputFile: "gas-report.txt",
  //   currency: "USD",
  //   coinmarketcap: COINMARKETCAP_API_KEY,
  //   // token: "MATIC",
  // },
};
