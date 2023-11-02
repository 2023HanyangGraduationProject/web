// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import { ethers } from "hardhat";

// const hre = require("hardhat");

async function main() {

  const ticket = await ethers.getContractFactory("Ticket");
  const ticketContract = await ticket.deploy(process.env.NEXT_PUBLIC_DEPLOYING_ADDRESS);
  // const ticketContract = await ticket.deploy(process.env.NEXT_PUBLIC_WALLET_ADDRESS);
  const ticketContractDeployed = await ticketContract.deployed();
  console.log("Ticket deployed abi??:", ticketContractDeployed.interface);
  console.log("Ticket deployed inteface:", ticketContractDeployed.interface.format("json"));
  console.log("Ticket deployed to:", ticketContractDeployed.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
