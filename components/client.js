// TODO: How should we handle the licenses?
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import * as ActionCreators from './action-creators';

/**
 * createDispatchers
 *
 * Create action dispatcher wrappers with bound playerID and credentials
 */
function createDispatchers(
  storeActionType,
  innerActionNames,
  store,
  playerID,
) {
  return innerActionNames.reduce((dispatchers, name) => {
    dispatchers[name] = function(...args) {
      store.dispatch(
        ActionCreators[storeActionType](
          name,
          args,
          playerID,
        )
      );
    };
    return dispatchers;
  }, {});
}

/**
 * createEventDispatchers
 *
 * Creates a set of dispatchers to dispatch game flow events.
 * @param {Array} eventNames - A list of event names.
 * @param {object} store - The Redux store to create dispatchers for.
 * @param {string} playerID - The ID of the player dispatching these events.
 */
export const createEventDispatchers = createDispatchers.bind(null, 'gameEvent');

/**
 * createMoveDispatchers
 *
 * Creates a set of dispatchers to make moves.
 * @param {Array} moveNames - A list of move names.
 * @param {object} store - The Redux store to create dispatchers for.
 * @param {string} playerID - The ID of the player dispatching these events.
 */
export const createMoveDispatchers = createDispatchers.bind(null, 'makeMove');

/**
 * Implementation of Client (see below).
 */
class _ClientImpl {
  constructor(store, playerId) {
    this.store = store;
    this.playerID = playerId;

    this.reset = () => {
      this.store.dispatch(ActionCreators.reset());
    };
    this.undo = () => {
      this.store.dispatch(ActionCreators.undo());
    };
    this.redo = () => {
      this.store.dispatch(ActionCreators.redo());
    };

    this.createDispatchers();
  }

  subscribe(fn) {
    this.store.subscribe(fn);

    if (this.multiplayerClient) {
      this.multiplayerClient.subscribe(fn);
    }
  }

  getState() {
    return this.store.getState();
  }

  connect() {
    if (this.multiplayerClient) {
      this.multiplayerClient.connect();
    }
  }

  createDispatchers() {
    this.moves = createMoveDispatchers(
      this.store.getMoveNames(),
      this.store,
      this.playerID,
    );

    // TODO: Enabling/disabling these events should be configurable.
    this.events = createEventDispatchers(
      [
        'endTurn',
        'endPhase',
        'endGame',
        'setActionPlayers'
      ],
      this.store,
      this.playerID,
    );
  }
}

/**
 * Client
 *
 * boardgame.io JS client.
 *
 * @param {...object} store - The configured store proxy.

 * Returns:
 *   A JS object that provides an API to interact with the
 *   game by dispatching moves and events.
 */
export function RawClient(store) {
  return new _ClientImpl(store);
}
