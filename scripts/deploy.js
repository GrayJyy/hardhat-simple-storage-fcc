//imports
const { ethers } = require("hardhat");
//async main
async function main() {
  const SimpleFactory = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleFactory.deploy();
  console.log("-----------Deploying....");
  await simpleStorage.deployed();
  console.log("address", simpleStorage.address);
}
//main
main()
  .then((process.exitCode = 0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
