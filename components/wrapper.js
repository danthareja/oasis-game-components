import React from 'react'
import { css } from 'react-emotion'
import { ClipLoader } from 'react-spinners'

import Loading from './loading.js'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`

export default class GameWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      proxy: null,
      game: null,
      ready: false,
      started: false,
      readySent: false
    }
    props.proxyPromise.then(([proxy, game]) => {
      game.once('started', () => {
        this.setState({
          ...this.state,
          started: true
        })
      })
      this.setState({
        proxy,
        game, 
        ready: game.isReady,
        started: game.isStarted
      })
    })
  }

  async sendReady () {
    this.setState({ ...this.state, readySent: true })
    await this.state.game.sendReady()
    this.setState({ ...this.state, readySent: false, ready: this.state.game.isReady })
  }

  render () {
    if (!this.state.proxy) {
      return <Loading />
    }
    if (!this.state.ready || !this.state.started) {
      let loader = <ClipLoader
        className={override}
        sizeUnit={'px'}
        size={30}
        height={50}
        color={'dark-green'}
        loading={true}
      />
      if (!this.state.ready) {
        let button = <a className='f6 link dim ba ph3 pv2 mb2 dib dark-green' onClick={this.sendReady.bind(this)}>Ready</a>
        return (
          <div className="flex flex-column w-100 center mt7 items-center">
            <h3>You're registered to play. Are you ready to start?</h3>
            {(this.state.readySent) ? loader : button}
          </div>
        )
      }
      if (!this.state.started) {
        if (!this.state.started) {
          return (
            <div className="flex flex-column w-100 center mt7 items-center">
              <h3>Waiting for other players...</h3>
              {loader}
            </div>
          )
        }
      }
    }
    return  React.cloneElement(this.props.children, {...this.state})
  }
}
