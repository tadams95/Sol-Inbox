const { web3 } = require("@openzeppelin/test-helpers/src/setup");

require("@openzeppelin/test-helpers/configure")({
  provider: web3.currentProvider,
  singletons: {
    abstraction: "truffle",
  },
});

const Inbox = artifacts.require("Inbox");

const { abi } = require("../build/contracts/Inbox.json");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

let accounts;
let inbox;

before("tests are run", async () => {
  inbox = await Inbox.deployed();
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
});

contract("Inbox", async function (accounts) {
  it("should deploy contract", async function () {
    return await assert.ok(inbox.options.address);
  });

});

