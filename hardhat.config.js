require('dotenv').config()
require('hardhat-abi-exporter');


require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

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
  solidity: "0.8.4",
  abiExporter: {
    path: './src/abi',
    runOnCompile: true,
    clear: true,
    spacing: 2,
    pretty: true,
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.POLYGON_API_KEY,
      bsc: process.env.BSC_API_KEY,
      opera: process.env.FANTOM_API_KEY,
      avalanche: process.env.AVALANCHE_API_KEY,

      rinkeby: process.env.RINKEBY_TESTNET_API_KEY,
      polygonMumbai: process.env.MUMBAI_TESTNET_API_KEY,
      bscTestnet: process.env.BSC_TESTNET_API_KEY,
      ftmTestnet: process.env.FANTOM_TESTNET_API_KEY,
      avalancheFujiTestnet: process.env.FUJI_TESTNET_API_KEY,

    }
  }
};
