require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    liskSepolia: {
      url: "https://rpc.sepolia-api.lisk.com",  // or your correct Lisk Sepolia RPC URL
      accounts: [vars.get("PRIVATE_KEY")],      // <-- Pull private key securely
    },
  },
};
