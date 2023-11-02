// "@nomicfoundation/hardhat-chai-matchers": "^1.0.5",
// "@nomicfoundation/hardhat-network-helpers": "^1.0.7",
// "@nomicfoundation/hardhat-toolbox": "^2.0.0",
// "@nomiclabs/hardhat-ethers": "^2.2.1",
// "@nomiclabs/hardhat-etherscan": "^3.1.4",
// require("@nomiclabs/hardhat-waffle");

import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/solidity-analyzer";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.20",
    networks: {
      hardhat: {
        gasPrice: 470000000000,
        chainId: 31337,
      },
    }
};
    //   avash: {
    //     url: 'http://localhost:9650/ext/bc/C/rpc',
    //     gasPrice: 470000000000,
    //     chainId: 43112,
    //     accounts: ["0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027", 
    //   ]
    //   },
    //   fuji: {
    //     url: 'https://api.avax-test.network/ext/bc/C/rpc',
    //     gasPrice: 470000000000,
    //     chainId: 43113,
    //     accounts: [
    //   ]
    //   },
    //   mainnet: {
    //     url: 'https://api.avax.network/ext/bc/C/rpc',
    //     gasPrice: 470000000000,
    //     chainId: 43114,
    //     accounts: [
    //   ]
    //   }
    // };
//   };
