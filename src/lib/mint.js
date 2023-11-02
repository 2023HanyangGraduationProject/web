// import { ethers } from "ethers";
// import '@nomiclabs/hardhat-ethers'
// import { ethers } from 'hardhat'
// import { ethers } from '@nomiclabs/hardhat-ethers'
import hre from "hardhat";
const { ethers } = hre;


async function mint(uri) {
    const nftFactory = await ethers.getContractAt("Ticket", process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
    // nftFactory.mint(process.env.NEXT_PUBLIC_WALLET_ADDRESS, 1, {value: ethers.utils.parseEther("0.1")})
    nftFactory.mint(process.env.NEXT_PUBLIC_WALLET_ADDRESS, 1, uri)
}