require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL = process.env.SEPOLIA_URL; // Ensure you have this in your .env file or set in your environment
const PRIVATE_KEY = process.env.PRIVATE_KEY; // Your private key for deploying contracts

module.exports = {
  solidity: "0.8.24", // Updated to have a single consistent version
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
      gasPrice: 100,
    }
  }
};
