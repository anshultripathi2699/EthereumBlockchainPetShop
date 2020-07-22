const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "spice fever surge mosquito weekend coffee danger print raise filter drop range";


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/cb21b53b306f4ba5805e232dab2f48db")
      },
      network_id: 3,
      gas: 400000000000000000
    }   
  }
};
