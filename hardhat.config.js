// "@nomicfoundation/hardhat-chai-matchers": "^1.0.5",
// "@nomicfoundation/hardhat-network-helpers": "^1.0.7",
// "@nomicfoundation/hardhat-toolbox": "^2.0.0",
// "@nomiclabs/hardhat-ethers": "^2.2.1",
// "@nomiclabs/hardhat-etherscan": "^3.1.4",
// require("@nomiclabs/hardhat-waffle");

// import "@nomicfoundation/hardhat-chai-matchers";
// import "@nomicfoundation/hardhat-network-helpers";
// import "@nomicfoundation/hardhat-toolbox";
// import "@nomiclabs/hardhat-ethers";
// import "@nomiclabs/hardhat-etherscan";
// import "@nomicfoundation/solidity-analyzer";

require ("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
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
