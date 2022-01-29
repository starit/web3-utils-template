require('dotenv-flow').config();
const Web3 = require('web3')

// kovan
let web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL), null, {
  transactionConfirmationBlocks: 1,
})

// const pk = ''
const pk = process.env.DEVELOPER_ACCOUNT_PK

const importWallet = async() => {
  await web3.eth.accounts.wallet.add(pk)
}

let account = web3.eth.accounts.privateKeyToAccount(pk)
let walletAddress = account.address
module.exports = {
  web3,
  walletAddress,
  account,
  importWallet
}
