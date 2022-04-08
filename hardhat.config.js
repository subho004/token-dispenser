require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    paths: {
        artifacts: './src/artifacts',
    },
    networks: {
        hardhat: {
            chainId: 1337
        },
        goreli: {
            url: "https://goerli.infura.io/v3/db81554d89d74a96970cf2c550822558",
            accounts: [`0x${process.env.PRIVATE_KEY}`]
            // accounts: [`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`]

        }
    },
    solidity: "0.8.3"
};

