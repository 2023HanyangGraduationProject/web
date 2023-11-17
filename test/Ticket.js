const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ticket", function () {
  let Ticket;
  let ticket;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Ticket = await ethers.getContractFactory("Ticket");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    // ticket = await Ticket.deploy(owner.address);
    ticket = await Ticket.deploy(addr1.address);
    await ticket.deployed();
    
    console.log("owner: " + owner.address)
    console.log("addr1: " + addr1.address)
    console.log("addr2: " + addr2.address)

    // ticket.connect(addr1);
    // ticket.connect(addr2);
});

it("Should transfer tickets correctly", async function () {
    // Transfer 1 ticket from owner to addr1.
    // await ticket.mint(addr1.address, 1);
    // await ticket.transfer(addr1.address, 1);
    await ticket.mint(addr1.address, 1);
    await ticket.connect(addr1).setApprovalForAll(owner.address, true);
    await ticket.safeTransferFrom(addr1.address, addr2.address, 1, 1, 1);

    // Check balances.
    // let ownerBalance = await ticket.balanceOf(owner.address);
    let addr1Balance = await ticket.balanceOf(addr1.address, 1);
    let addr2Balance = await ticket.balanceOf(addr2.address, 1);

    // expect(ownerBalance).to.equal(0);
    expect(addr1Balance).to.equal(ethers.BigNumber.from(0));
    expect(addr2Balance).to.equal(ethers.BigNumber.from(1));
  });
});