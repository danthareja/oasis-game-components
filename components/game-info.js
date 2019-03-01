import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import { PulseLoader } from 'react-spinners'

const override = css`
    display: inline;
    margin: 20 auto;
    border-color: red;
`
const styles = ['f4', 'pv3', 'mh-75', 'flex', 'flex-column', 'items-center']

export default class GameInfo extends React.Component {
  isMyTurn () {
    let ctx = this.props.ctx
    let playerId = this.props.playerID
    let myTurn = playerId && (
      ctx.current_player === playerId ||
      (ctx.action_players && ctx.action_players.indexOf(playerId) !== -1)
    )
    return myTurn
  }

  render () {
    if (this.props.winner) {
      return <div className={styles.join(' ')}>{this.props.winner}</div>
    }
    if (this.isMyTurn()) {
      return <div className={styles.join(' ')}>It's your turn. Make a move!</div>
    }
    let ctx = this.props.ctx
    let activePlayers = (ctx.action_players && ctx.action_players.length) || ctx.current_player
    let playerText = (typeof activePlayers === 'object' && activePlayers.length) ? 'Players' : 'Player'
    if (activePlayers instanceof Array) {
      var text = `Waiting for ${playerText} ${activePlayers.join()} to make moves...`
    } else {
      text = `Waiting for ${playerText} ${activePlayers} to make a move...`
    }
    return (
      <div className={[...styles, 'blue'].join(' ')}>
        <span>{text}</span>
        <PulseLoader
          className={override}
          sizeUnit={'px'}
          size={10}
          color={'#357EDD'}
          loading={true}
        />
      </div>
    )
  }
}

