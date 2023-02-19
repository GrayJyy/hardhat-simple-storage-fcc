const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("SimpleStorage", () => {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });
  it("Should start with a favorite number of 0", async () => {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0"; // passing
    /*
    const expectedValue = "1"; // failing
    */
    assert.equal(currentValue.toString(), expectedValue);
    // expect(currentValue.toString()).to.equal(expectedValue); ---  same as assert.equal(a,b)
  });
  //   it.only(......)--- only run this test function
  it("Should update the number when we call the store function", async () => {
    const expectedValue = "9";
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);
    const updateValue = await simpleStorage.retrieve();
    assert.equal(expectedValue, updateValue.toString());
  });
  it("Should ");
});
