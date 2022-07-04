require("@nomiclabs/hardhat-waffle");

// Import and configure dotenv
require("dotenv").config();


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
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      /*
      Infura API adresi buraya girilmeli
      */
      url: "https://polygon-mumbai.infura.io/v3/xxxxxxxxxxxxxxxxx",
      accounts: [privateKey]
    },
    rinkeby: {
      /*
      Rinkeby API adresi buraya girilmeli
      */
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY]
    },
    binance: {
      /*
      bsc nin adresi standart direk kopyala yapıştır yapabilirsin
      */
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
  }
};