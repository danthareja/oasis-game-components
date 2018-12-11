/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Debug } from './debug/debug';
import { RawClient } from './client';

/**
 * Client
 *
 * boardgame.io React client.
 *
 * @param {...object} proxyBuilder - A constructor that returns a store proxy.
 * @param {...object} proxy - An existing store proxy to reuse.
 * @param {...object} board - The React component for the game.
 * @param {number} playerId - The current player's ID.
 * @param {Array} players - The list of all players.
 * @param {string} multiplayer - A multiplayer game instance.
 * @param {...object} debug - Enables the Debug UI.
 *
 * Returns:
 *   A React component that wraps board and provides an
 *   API through props for it to interact with the framework
 *   and dispatch actions such as MAKE_MOVE, GAME_EVENT, RESET,
 *   UNDO and REDO.
 */
export function Client({
  board,
  proxy,
  playerId,
  players,
  multiplayer,
  debug
}) {
  if (debug === undefined) debug = true;

  /*
   * WrappedBoard
   *
   * The main React component that wraps the passed in
   * board component and adds the API to its props.
   */
  return class WrappedBoard extends React.Component {
    static propTypes = {
      // The ID of a game to connect to.
      // Only relevant in multiplayer.
      gameID: PropTypes.string,
      // The ID of the player associated with this client.
      // Only relevant in multiplayer.
      playerID: PropTypes.number,
      // Enable / disable the Debug UI.
      debug: PropTypes.any
    };

    static defaultProps = {
      gameID: 'default',
      playerID: playerId,
      debug: true,
    };

    state = {
      gameStateOverride: null,
    };

    constructor(props) {
      super(props);

      this.proxy = proxy;
      this.client = RawClient(proxy, playerId);

      this.gameID = props.gameID;
      this.playerID = playerId;

      this.client.subscribe(() => this.forceUpdate());
    }

    componentDidUpdate(prevProps) {
      if (this.props.gameID != prevProps.gameID) {
        this.updateGameID(this.props.gameID);
      }
      if (this.props.playerID != prevProps.playerID) {
        this.updatePlayerID(this.props.playerID);
      }
      if (this.props.credentials != prevProps.credentials) {
        this.updateCredentials(this.props.credentials);
      }
    }

    updateGameID = gameID => {
      this.client.updateGameID(gameID);
      this.gameID = gameID;
      this.forceUpdate();
    };

    updatePlayerID = playerID => {
      this.client.updatePlayerID(playerID);
      this.playerID = playerID;
      this.forceUpdate();
    };

    updateCredentials = credentials => {
      this.client.updateCredentials(credentials);
      this.credentials = credentials;
      this.forceUpdate();
    };

    componentDidMount() {
      this.client.connect();
    }

    overrideGameState = state => {
      this.setState({ gameStateOverride: state });
    };

    render() {
      let _board = null;
      let _debug = null;

      let state = this.client.getState();
      const { debug: debugProp, ...rest } = this.props;

      if (this.state.gameStateOverride) {
        state = { ...state, ...this.state.gameStateOverride };
      }

      if (board) {
        _board = React.createElement(board, {
          ...state,
          ...rest,
          isMultiplayer: !!multiplayer,
          isSpectating: !!multiplayer ? multiplayer.isSpectating() : false,
          moves: this.client.moves,
          events: this.client.events,
          gameID: this.gameID,
          playerID: this.playerId,
          reset: this.client.reset,
          undo: this.client.undo,
          redo: this.client.redo,
        });
      }

      if (debug !== false && debugProp) {
        const showGameInfo = typeof debug === 'object' && debug.showGameInfo;
        const dockControls = typeof debug === 'object' && debug.dockControls;
        _debug = React.createElement(Debug, {
          gamestate: state,
          store: this.client.store,
          isMultiplayer: !!multiplayer,
          moves: this.client.moves,
          events: this.client.events,
          gameID: this.gameID,
          playerID: this.playerId,
          step: this.client.step,
          reset: this.client.reset,
          undo: this.client.undo,
          redo: this.client.redo,
          overrideGameState: this.overrideGameState,
          updateGameID: this.updateGameID,
          updatePlayerID: this.updatePlayerID,
          showGameInfo,
          dockControls,
        });
      }

      return (
        <div className="client">
          <span>
            {_debug}
            {_board}
          </span>
        </div>
      );
    }
  };
}
