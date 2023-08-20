const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const FileNFT = await hre.ethers.getContractFactory("FileNFT");
  const fileShare = await FileNFT.deploy();
  await fileShare.deployed();
  console.log("fileShare Contract deployed to:", fileShare.address);

  fs.writeFileSync('./config.js', `
  export const fileShareAddress = "${fileShare.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
