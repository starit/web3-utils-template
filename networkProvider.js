// More network info can be found here: 
//   * https://chainid.network/chains.json
const networks = {
  mainnet: {
    rpc: 'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY
  },
  kovan: {
    rpc: 'https://kovan.infura.io/v3/' + process.env.INFURA_API_KEY
  },
  mainnetFork: {
    rpc: 'http://127.0.0.1'
  },
  local: {
    rpc: 'http://127.0.0.1'
  },
  arbitrum: {
    rpc: 'https://arbitrum-mainnet.infura.io/v3/' + process.env.INFURA_API_KEY,
    // rpc: 'https://arb1.arbitrum.io/rpc'
  },
  optimism: {
    rpc: 'https://mainnet.optimism.io/'
  }
}


module.exports = {
  currentNetwork: networks.mainnet
}
