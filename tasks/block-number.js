const { task } = require("hardhat/config");

// just like the custom instructions
task("block-number", "prints the current block number").setAction(
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`current block number is ${blockNumber}`);
  }
);
