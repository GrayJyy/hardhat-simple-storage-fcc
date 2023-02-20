//imports
import { ethers, run, network } from "hardhat";
//async main
async function main() {
  const SimpleFactory = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleFactory.deploy();
  console.log("-----------Deploying....");
  await simpleStorage.deployed();
  console.log("address", simpleStorage.address);
  console.log(network.config);
  /*   
// because of the network,cant verify contract in China
if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    console.log("waiting for block confirmations....");
    await simpleStorage.deployTransaction.wait(6); // waiting for 6 blocks warning:it will take a long time
    await verify(simpleStorage.address, []);
  } */
  const currentValue = await simpleStorage.retrieve();
  console.log("currentValue", currentValue);
  const transactionResponse = await simpleStorage.store(9);
  await transactionResponse.wait(1);
  console.log("waiting for transactionResponse......");
  const updateValue = await simpleStorage.retrieve();
  console.log("updateValue", updateValue);
}

async function verify(contractAddress, args) {
  console.log("Verifying........");
  try {
    await run("verify:verify", {
      address: contractAddress,
      contractArguments: args,
    });
  } catch (e) {
    console.error(e);
  }
}
//main
main()
  .then(process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
