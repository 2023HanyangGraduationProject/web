require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

require ("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
      gasLimit: 5000000,
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  // mocha: {
  //   timeout: 40000
  // }
}

task('mint', 'Mint SBT')
  .addParam('address', 'Address of deployed SBT')
  .addParam('to', 'Address receiving SBT token')
  .addParam('tokenId', 'ID of SBT token that is being minted')
  .setAction(async (args, hre) => {
    const sbt = await hre.ethers.getContractAt('Ticket', args.address)
    // const sbt = await hre.ethers.getContractAt('Ticket', "0x6E3e552038631971f1649C565aDb0121928e0A49")
    const [owner] = await hre.ethers.getSigners()
    const tx = await (await sbt.mint(args.to, args.tokenId)).wait()
    // const tx = await (await sbt.mint(args.to, args.tokenId, "ipfs://bafyreihvuf3xonmtrmyqcvyf7elnzzsbhsymzk2h2lqbwjhqwikbaokdvm/metadata.json")).wait()
    console.log(tx)
    console.log(`SBT with tokenId ${args.tokenId} was minted for address ${args.to}`)
  }
)
