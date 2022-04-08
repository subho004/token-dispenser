const hre = require("hardhat");

async function main() {
const [deployer] = await hre.ethers.getSigners();

console.log("Deploying contracts with the account:", deployer.address);

const XARToken = await hre.ethers.getContractFactory("XARToken");
const xarToken = await XARToken.deploy("XARToken", "TKN");

await xarToken.deployed();

console.log("Token deployed to:", xarToken.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});