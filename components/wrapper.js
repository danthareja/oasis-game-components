import React from 'react'
import Loading from './loading.js'

export default class GameWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      proxy: null,
      game: null
    }
    props.proxyPromise.then(([proxy, game]) => {
      this.setState({ proxy, game })
    })
  }

  render () {
    return this.state.proxy
      ? React.cloneElement(this.props.children, {...this.state})
      : <Loading />
  }
}
