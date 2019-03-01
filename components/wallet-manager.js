import React from 'react'

const BALANCE_REFRESH_INTERVAL = 30000

function sendFundTransaction(metamask, from, to) {
  return new Promise((resolve, reject) => {
    const value = metamask.toWei(0.3, "ether")
    metamask.eth.sendTransaction({ from, to, value }, err => {
      if (err) return reject(err)
      return resolve()
    })
  })
}

function delay (ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

export default class WalletManager extends React.Component {
  constructor (props) {
    super(props)
    this.web3c = props.web3c
    this.metamask = props.metamask
    this.address = this.web3c.oasis.defaultAccount.address
    this.state = {
      balance: 0,
      subscription: null,
      error: null
    }
  }

  async _loadBalance () {
    try {
      const balance = await this.props.web3c.eth.getBalance(this.address) 
      this.setState({
        ...this.state,
        balance
      })
    } catch (err) {
      this.setState({
        ...this.state,
        error: `Could not get balance: ${err}`
      })
    }
  }

  _startBalancePolling () {
    let subscription = setInterval(async () => {
      await this._loadBalance()
    }, BALANCE_REFRESH_INTERVAL)
    this.setState({
      ...this.state,
      subscription
    })
  }

  componentDidMount () {
    this._loadBalance()
    this._startBalancePolling()
  }

  componentDidUnmount () {
    if (this.state.subscription) clearInterval(this.state.subscription)
  }

  async fundWallet () {
    try {
      await sendFundTransaction(this.metamask, this.metamask.eth.defaultAccount, this.address)
      await delay(2000)
      await this._loadBalance()
    } catch (err) {
      this.setState({
        ...this.state,
        error: `Could not fund wallet: ${err}`
      })
    }
  }

  copyAddress () {
    this.textArea.select()
    document.execCommand('copy')
  }

  render () {
    const errorView = this.state.error || ''
    if (!this.state.balance) {
      var content = <div>Your wallet is empty! Fund it by clicking here:</div>
    }
    let contentStyle = { 'line-height': '2em' }
    content = (
      <div style={contentStyle} className="flex ba pa2">
        <span className="mr3">
          <b>Address:</b> <span onClick={this.copyAddress}>{this.address}</span>
        </span>
        <span className="mr3">
          <b>Balance:</b> {this.metamask.fromWei(this.state.balance, 'ether')} DEV
        </span>
      </div>
    )
    return (
      <div className="flex flex-column items-center">
        <div className="flex mw-50">
          {content}
          <button className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6"
                  onClick={this.fundWallet.bind(this)}>Fund</button>
        </div>
        <div className="dark-red mt2">
          {errorView}
        </div>
      </div>
    )
  }
}
