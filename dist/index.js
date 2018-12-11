(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-emotion'), require('react-spinners'), require('prop-types'), require('mousetrap'), require('flatted')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-emotion', 'react-spinners', 'prop-types', 'mousetrap', 'flatted'], factory) :
	(factory((global.Client = {}),global.React,global.reactEmotion,global.reactSpinners,global.PropTypes,global.Mousetrap,global.Flatted));
}(this, (function (exports,React,reactEmotion,reactSpinners,PropTypes,Mousetrap,flatted) { 'use strict';

function __$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
Mousetrap = Mousetrap && Mousetrap.hasOwnProperty('default') ? Mousetrap['default'] : Mousetrap;

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n'], ['\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var override = reactEmotion.css(_templateObject);

var Loading = (function () {
  return React.createElement(
    'section',
    { className: 'w-100 center mt7 flex flex-column items-center' },
    React.createElement(reactSpinners.ClipLoader, {
      className: override,
      sizeUnit: 'px',
      size: 150,
      color: '#123abc',
      loading: true
    }),
    React.createElement(
      'h2',
      { className: 'loading-text' },
      'Loading initial game state...'
    )
  );
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameWrapper = function (_React$Component) {
  _inherits(GameWrapper, _React$Component);

  function GameWrapper(props) {
    _classCallCheck(this, GameWrapper);

    var _this = _possibleConstructorReturn(this, (GameWrapper.__proto__ || Object.getPrototypeOf(GameWrapper)).call(this, props));

    _this.state = {
      proxy: null,
      game: null
    };
    props.proxyPromise.then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          proxy = _ref2[0],
          game = _ref2[1];

      _this.setState({ proxy: proxy, game: game });
    });
    return _this;
  }

  _createClass(GameWrapper, [{
    key: 'render',
    value: function render() {
      return this.state.proxy ? React.cloneElement(this.props.children, _extends({}, this.state)) : React.createElement(Loading, null);
    }
  }]);

  return GameWrapper;
}(React.Component);

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject$1 = _taggedTemplateLiteral$1(['\n    display: inline;\n    margin: 20 auto;\n    border-color: red;\n'], ['\n    display: inline;\n    margin: 20 auto;\n    border-color: red;\n']);

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral$1(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var override$1 = reactEmotion.css(_templateObject$1);
var styles = ['f4', 'pv3', 'mh-75', 'flex', 'flex-column', 'items-center'];

var GameInfo = function (_React$Component) {
  _inherits$1(GameInfo, _React$Component);

  function GameInfo() {
    _classCallCheck$1(this, GameInfo);

    return _possibleConstructorReturn$1(this, (GameInfo.__proto__ || Object.getPrototypeOf(GameInfo)).apply(this, arguments));
  }

  _createClass$1(GameInfo, [{
    key: 'isMyTurn',
    value: function isMyTurn() {
      var ctx = this.props.ctx;
      var playerId = this.props.playerID;
      console.log('IN MY TURN, ctx:', ctx, 'playerId:', playerId);
      var myTurn = playerId && (ctx.current_player === playerId || ctx.active_players && ctx.active_players.indexOf(playerId) !== -1);
      return myTurn;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.winner) {
        return React.createElement(
          'div',
          { className: styles.join(' ') },
          this.props.winner
        );
      }
      if (this.isMyTurn()) {
        return React.createElement(
          'div',
          { className: styles.join(' ') },
          'It\'s your turn. Make a move!'
        );
      }
      var ctx = this.props.ctx;
      var activePlayers = ctx.active_players || ctx.current_player;
      if (activePlayers instanceof Array) {
        var text = 'Waiting for Players ' + activePlayers.join() + ' to make moves...';
      } else {
        text = 'Waiting for Player ' + activePlayers + ' to make a move...';
      }
      return React.createElement(
        'div',
        { className: [].concat(styles, ['blue']).join(' ') },
        React.createElement(
          'span',
          null,
          text
        ),
        React.createElement(reactSpinners.PulseLoader, {
          className: override$1,
          sizeUnit: 'px',
          size: 10,
          color: '#357EDD',
          loading: true
        })
      );
    }
  }]);

  return GameInfo;
}(React.Component);

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

function AssignShortcuts(moveNames, eventNames, blacklist) {
  var shortcuts = {};

  var events = {};
  for (var name in moveNames) {
    events[name] = name;
  }
  for (var _name in eventNames) {
    events[_name] = _name;
  }

  var taken = {};
  for (var i = 0; i < blacklist.length; i++) {
    var c = blacklist[i];
    taken[c] = true;
  }

  // Try assigning the first char of each move as the shortcut.
  var t = taken;
  var canUseFirstChar = true;
  for (var _name2 in events) {
    var shortcut = _name2[0];
    if (t[shortcut]) {
      canUseFirstChar = false;
      break;
    }

    t[shortcut] = true;
    shortcuts[_name2] = shortcut;
  }
  if (canUseFirstChar) {
    return shortcuts;
  }

  // If those aren't unique, use a-z.
  t = taken;
  var next = 97;
  shortcuts = {};
  for (var _name3 in events) {
    var _shortcut = String.fromCharCode(next);

    while (t[_shortcut]) {
      next++;
      _shortcut = String.fromCharCode(next);
    }

    t[_shortcut] = true;
    shortcuts[_name3] = _shortcut;
  }
  return shortcuts;
}

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

var Item = function Item(props) {
  return React.createElement(
    'div',
    { className: 'gameinfo-item' },
    React.createElement(
      'strong',
      null,
      props.name,
      ' '
    ),
    React.createElement(
      'div',
      null,
      JSON.stringify(props.value)
    )
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any
};

var GameInfo$2 = function GameInfo(props) {
  return React.createElement(
    'section',
    { className: 'gameinfo' },
    React.createElement(Item, { name: 'gameID', value: props.gameID }),
    React.createElement(Item, { name: 'playerID', value: props.playerID }),
    React.createElement(Item, { name: 'isActive', value: props.isActive }),
    props.isMultiplayer && React.createElement(
      'span',
      null,
      React.createElement(Item, { name: 'isConnected', value: props.isConnected }),
      React.createElement(Item, { name: 'isMultiplayer', value: props.isMultiplayer })
    )
  );
};

GameInfo$2.propTypes = {
  gameID: PropTypes.string,
  playerID: PropTypes.string,
  isActive: PropTypes.bool,
  isConnected: PropTypes.bool,
  isMultiplayer: PropTypes.bool
};

__$styleInject("/*\n * Copyright 2017 The boardgame.io Authors\n *\n * Use of this source code is governed by a MIT-style\n * license that can be found in the LICENSE file or at\n * https://opensource.org/licenses/MIT.\n */\n\n.debug-ui {\n  text-align: left;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  background: #fefefe;\n  border-left: 1px solid #ddd;\n  box-shadow: -1px 0 10px #aaa;\n  position: absolute;\n  width: 300px;\n  right: 0;\n  top: 0;\n  height: 100%;\n  font-family: monospace;\n  font-size: 14px;\n}\n\n#debug-controls.docktop {\n  position: fixed;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  min-width: 500px;\n  top: 0;\n  right: 300px;\n  height: 50px;\n  background: #fff;\n  box-shadow: -3px 3px 3px #ccc;\n}\n\n@media only screen and (max-device-width: 750px) {\n  .debug-ui {\n    display: none;\n  }\n}\n\n.debug-ui .gameinfo {\n  background: #ddd;\n  position: fixed;\n  bottom: 0;\n  box-sizing: border-box;\n  width: 285px;\n  margin-left: -20px;\n  margin-bottom: 0;\n  padding: 10px;\n}\n\n.debug-ui .gameinfo-item div {\n  float: right;\n  text-align: right;\n}\n\n.debug-ui .ai-visualization {\n  position: fixed;\n  opacity: 100%;\n  right: 300px;\n  height: 100%;\n  width: 100%;\n  max-width: 3000px;\n  background: #fafafa;\n  border-right: 1px solid #ddd;\n}\n\n.debug-ui .pane {\n  float: left;\n  padding: 20px;\n  box-sizing: border-box;\n  min-width: 300px;\n  max-width: 400px;\n  opacity: 0.8;\n}\n\n.debug-ui section {\n  margin-bottom: 20px;\n}\n\n.debug-ui textarea {\n  resize: none;\n}\n\n.debug-ui .move {\n  cursor: pointer;\n  margin-bottom: 10px;\n  color: #666;\n}\n\n.debug-ui .move:hover {\n  color: #333;\n}\n\n.debug-ui .move.active {\n  color: #111;\n  font-weight: bold;\n}\n\n.debug-ui .move-error {\n  color: #a00;\n  font-weight: bold;\n}\n\n.debug-ui .arg-field {\n  outline: none;\n  font-family: monospace;\n}\n\n.debug-ui .key {\n  margin-bottom: 5px;\n}\n\n.debug-ui .key-box {\n  display: inline-block;\n  cursor: pointer;\n  min-width: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #888;\n  background: #eee;\n  color: #444;\n}\n\n.debug-ui .key-box:hover {\n  background: #ddd;\n}\n\n.debug-ui .key.active .key-box {\n  background: #ddd;\n  border: 1px solid #999;\n  box-shadow: none;\n}\n\n.debug-ui .key-child {\n  display: inline-block;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.debug-ui .menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.debug-ui .menu .item {\n  cursor: pointer;\n  margin-top: -10px;\n  margin-bottom: 20px;\n  margin-right: 10px;\n  padding: 5px;\n  min-width: 50px;\n  text-align: center;\n}\n\n.debug-ui .menu .item.active {\n  font-weight: bold;\n  border-bottom: 3px solid #ccc;\n}\n\n.debug-ui .player-box {\n  display: flex;\n  flex-direction: row;\n}\n\n.debug-ui .player {\n  cursor: pointer;\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  background: #eee;\n  border: 3px solid #fff;\n  box-sizing: content-box;\n}\n\n.debug-ui .player.current {\n  background: #555;\n  color: #eee;\n  font-weight: bold;\n}\n\n.debug-ui .player.active {\n  border: 3px solid #ff7f50;\n}\n", {});

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * KeyboardShortcut
 *
 * Registers a keyboard shortcut to activate the
 * associated child component that is passed in.
 *
 * When the key is pressed, 'active' is set to true
 * in the prop passed to the child.
 */
var KeyboardShortcut = function (_React$Component) {
  _inherits$4(KeyboardShortcut, _React$Component);

  function KeyboardShortcut() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$4(this, KeyboardShortcut);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = KeyboardShortcut.__proto__ || Object.getPrototypeOf(KeyboardShortcut)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false
    }, _this.deactivate = function () {
      _this.setState({ active: false });
    }, _this.activate = function () {
      _this.setState({ active: true });
      if (_this.props.onPress) {
        _this.props.onPress();
        _this.setState({ active: false });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass$4(KeyboardShortcut, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      Mousetrap.bind(this.props.value, function (e) {
        e.preventDefault();
        _this2.activate();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      Mousetrap.unbind(this.props.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var child = this.props.children;
      if (_typeof$1(this.props.children) === _typeof$1(this)) {
        child = React.cloneElement(this.props.children, {
          active: this.state.active,
          deactivate: this.deactivate,
          activate: this.activate
        });
      }

      var className = 'key';
      if (this.state.active) {
        className += ' active';
      }

      return React.createElement(
        'div',
        { className: className },
        React.createElement(
          'div',
          { className: 'key-box', onClick: this.activate },
          this.props.value
        ),
        React.createElement(
          'div',
          { className: 'key-child' },
          child
        )
      );
    }
  }]);

  return KeyboardShortcut;
}(React.Component);
KeyboardShortcut.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.any,
  onPress: PropTypes.func
};

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Controls that are triggered by keyboard shortcuts.
 */
var Controls = function Controls(props) {
  var ai = null;

  if (props.step) {
    ai = [React.createElement(
      KeyboardShortcut,
      { key: '4', value: '4', onPress: props.step },
      'step'
    ), React.createElement(
      KeyboardShortcut,
      { key: '5', value: '5', onPress: props.simulate },
      'simulate'
    )];
  }

  var style = null;
  var className = 'controls';
  if (props.dockTop) {
    className += ' docktop';
  }
  if (props.help) {
    className += ' help';
  }

  var display = props.help && !props.dockTop ? 'block' : 'none';

  return React.createElement(
    'section',
    { id: 'debug-controls', style: style, className: className },
    React.createElement(
      KeyboardShortcut,
      { value: '1', onPress: props.reset },
      'reset'
    ),
    React.createElement(
      KeyboardShortcut,
      { value: '2', onPress: props.save },
      'save'
    ),
    React.createElement(
      KeyboardShortcut,
      { value: '3', onPress: props.restore },
      'restore'
    ),
    ai,
    props.dockTop || React.createElement(
      KeyboardShortcut,
      { value: '?', onPress: props.toggleHelp },
      'show more'
    ),
    React.createElement(
      'div',
      { className: 'key', style: { display: display } },
      React.createElement(
        'div',
        { className: 'key-box' },
        'd'
      ),
      ' show/hide this pane'
    ),
    React.createElement(
      'div',
      { className: 'key', style: { display: display } },
      React.createElement(
        'div',
        { className: 'key-box' },
        'l'
      ),
      ' show/hide log'
    ),
    React.createElement(
      'div',
      { className: 'key', style: { display: display } },
      React.createElement(
        'div',
        { className: 'key-box' },
        'i'
      ),
      ' show/hide game info tab'
    ),
    React.createElement(
      'div',
      { className: 'key', style: { display: display } },
      React.createElement(
        'div',
        { className: 'key-box' },
        't'
      ),
      ' dock controls'
    )
  );
};

Controls.propTypes = {
  help: PropTypes.bool,
  toggleHelp: PropTypes.func,
  step: PropTypes.func,
  simulate: PropTypes.func,
  reset: PropTypes.func,
  save: PropTypes.func,
  restore: PropTypes.func,
  dockTop: PropTypes.bool
};

var _createClass$5 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Component that renders information about the
 * players in the game (whose turn it is etc.).
 */
var PlayerInfo = function (_React$Component) {
  _inherits$5(PlayerInfo, _React$Component);

  function PlayerInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$5(this, PlayerInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlayerInfo.__proto__ || Object.getPrototypeOf(PlayerInfo)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (playerID) {
      var arg = playerID == _this.props.playerID ? null : playerID;
      _this.props.onClick(arg);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass$5(PlayerInfo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var players = [];

      var _loop = function _loop(i) {
        var playerID = i + 1; // Player ids are integers and start at 1.

        var className = 'player';

        if (playerID === _this2.props.ctx.current_player) {
          className += ' current';
        }

        if (playerID === _this2.props.player_id) {
          className += ' active';
        }

        players.push(React.createElement(
          'div',
          {
            className: className,
            key: i,
            onClick: function onClick() {
              return _this2.onClick(playerID);
            }
          },
          playerID
        ));
      };

      for (var i = 0; i < this.props.ctx.num_players; i++) {
        _loop(i);
      }

      return React.createElement(
        'div',
        { className: 'player-box' },
        players
      );
    }
  }]);

  return PlayerInfo;
}(React.Component);
PlayerInfo.propTypes = {
  ctx: PropTypes.any.isRequired,
  playerID: PropTypes.any,
  onClick: PropTypes.func
};

var _createClass$6 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$6(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * DebugMove
 *
 * Component that allows the user to dispatch a move from
 * the debug pane. The user is presented with the textarea
 * to enter any additional arguments.
 */
var DebugMove = function (_React$Component) {
  _inherits$6(DebugMove, _React$Component);

  function DebugMove() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$6(this, DebugMove);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DebugMove.__proto__ || Object.getPrototypeOf(DebugMove)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: ''
    }, _this.onSubmit = function (value) {
      var error = '';

      try {
        var argArray = new Function('return [' + value + ']')();
        _this.props.fn.apply(_this, argArray);
      } catch (e) {
        error = '' + e;
      }

      _this.setState({
        error: error,
        focus: false,
        enterArg: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass$6(DebugMove, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          KeyboardShortcut,
          { value: this.props.shortcut },
          React.createElement(DebugMoveArgField, { name: this.props.name, onSubmit: this.onSubmit })
        ),
        this.state.error ? React.createElement(
          'span',
          { className: 'move-error' },
          this.state.error
        ) : null
      );
    }
  }]);

  return DebugMove;
}(React.Component);

DebugMove.propTypes = {
  name: PropTypes.string.isRequired,
  shortcut: PropTypes.string.isRequired,
  fn: PropTypes.func.isRequired
};
var DebugMoveArgField = function (_React$Component2) {
  _inherits$6(DebugMoveArgField, _React$Component2);

  function DebugMoveArgField() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck$6(this, DebugMoveArgField);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = DebugMoveArgField.__proto__ || Object.getPrototypeOf(DebugMoveArgField)).call.apply(_ref2, [this].concat(args))), _this2), _this2.onKeyDown = function (e) {
      if (e.key == 'Enter') {
        e.preventDefault();
        var value = _this2.span.innerText;
        _this2.props.onSubmit(value);
        _this2.span.innerText = '';
        _this2.props.deactivate();
      }

      if (e.key == 'Escape') {
        e.preventDefault();
        _this2.props.deactivate();
      }
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass$6(DebugMoveArgField, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.active) {
        this.span.focus();
      } else {
        this.span.blur();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var className = 'move';
      if (this.props.active) className += ' active';
      return React.createElement(
        'div',
        { className: className, onClick: this.props.activate },
        this.props.name,
        '(',
        React.createElement('span', {
          ref: function ref(r) {
            _this3.span = r;
          },
          className: 'arg-field',
          onBlur: this.props.deactivate,
          onKeyDown: this.onKeyDown,
          contentEditable: true
        }),
        ')'
      );
    }
  }]);

  return DebugMoveArgField;
}(React.Component);
DebugMoveArgField.propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  active: PropTypes.bool,
  activate: PropTypes.func,
  deactivate: PropTypes.func
};

var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Removes all the keys in ctx that begin with a _.
 */
function SanitizeCtx(ctx) {
  var r = {};
  for (var key in ctx) {
    if (!key.startsWith('_')) {
      r[key] = ctx[key];
    }
  }
  return r;
}

/**
 * Debug
 *
 * Debug pane that displays the game state objects,
 * allows you to dispatch moves,
 * and allows you to save / restore from localStorage.
 */
var Debug = function (_React$Component) {
  _inherits$3(Debug, _React$Component);

  function Debug(props) {
    _classCallCheck$3(this, Debug);

    var _this = _possibleConstructorReturn$3(this, (Debug.__proto__ || Object.getPrototypeOf(Debug)).call(this, props));

    _this.saveState = function () {
      var json = flatted.stringify(_this.props.gamestate);
      window.localStorage.setItem('gamestate', json);
    };

    _this.restoreState = function () {
      var gamestateJSON = window.localStorage.getItem('gamestate');
      if (gamestateJSON !== null) {
        var gamestate = flatted.parse(gamestateJSON);
        _this.props.store.dispatch(restore(gamestate));
      }
    };

    _this.onClickMain = function () {
      _this.setState({ showLog: false });
    };

    _this.onClickLog = function () {
      _this.setState({ showLog: true });
    };

    _this.toggleHelp = function () {
      _this.setState(function (oldstate) {
        return { help: !oldstate.help };
      });
    };

    _this.onLogHover = function (_ref) {
      var state = _ref.state,
          metadata = _ref.metadata;

      _this.setState({ AIMetadata: metadata });
      _this.props.overrideGameState(state);
    };

    _this.simulate = function () {
      var iterations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10000;
      var sleepTimeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      var step = function step() {
        var action = _this.props.step();
        if (action && iterations > 1) {
          iterations--;
          setTimeout(step, sleepTimeout);
        }
      };

      step();
    };

    _this.shortcuts = AssignShortcuts(props.moves, props.events, 'dlit');

    _this.state = {
      showDebugUI: true,
      showLog: false,
      showGameInfo: props.showGameInfo,
      dockControls: props.dockControls,
      help: false,
      AIMetadata: null
    };
    return _this;
  }

  _createClass$3(Debug, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      Mousetrap.bind('d', function (e) {
        e.preventDefault();
        _this2.setState(function (old) {
          return { showDebugUI: !old.showDebugUI };
        });
      });

      Mousetrap.bind('l', function (e) {
        e.preventDefault();
        _this2.setState(function (old) {
          return { showLog: !old.showLog };
        });
      });

      Mousetrap.bind('i', function (e) {
        e.preventDefault();
        _this2.setState(function (old) {
          return { showGameInfo: !old.showGameInfo };
        });
      });

      Mousetrap.bind('t', function (e) {
        e.preventDefault();
        _this2.setState(function (old) {
          return { dockControls: !old.dockControls };
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      Mousetrap.unbind('d');
      Mousetrap.unbind('l');
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.showDebugUI) {
        return null;
      }

      var moves = [];
      for (var name in this.props.moves) {
        var fn = this.props.moves[name];
        var shortcut = this.shortcuts[name];
        moves.push(React.createElement(DebugMove, { key: name, name: name, fn: fn, shortcut: shortcut }));
      }

      var events = [];
      for (var _name in this.props.events) {
        var _fn = this.props.events[_name];
        var _shortcut = this.shortcuts[_name];
        events.push(React.createElement(DebugMove, { key: _name, name: _name, fn: _fn, shortcut: _shortcut }));
      }

      var visualizeAI = this.state.AIMetadata && this.props.visualizeAI;
      var className = 'debug-ui';

      if (this.state.dockControls) {
        className += ' docktop';
      }

      return React.createElement(
        'div',
        { className: className },
        visualizeAI && React.createElement(
          'div',
          { className: 'ai-visualization' },
          this.props.visualizeAI(this.state.AIMetadata)
        ),
        React.createElement(
          'div',
          { className: 'pane' },
          React.createElement(
            'div',
            { className: 'menu' },
            React.createElement(
              'div',
              {
                className: this.state.showLog ? 'item' : 'item active',
                onClick: this.onClickMain
              },
              'Main'
            ),
            React.createElement(
              'div',
              {
                className: this.state.showLog ? 'item active' : 'item',
                onClick: this.onClickLog
              },
              'Log'
            )
          ),
          this.state.showLog || React.createElement(
            'span',
            null,
            this.state.showGameInfo && React.createElement(GameInfo$2, {
              gameID: this.props.gameID,
              playerID: this.props.playerID,
              isActive: this.props.gamestate.isActive,
              isConnected: this.props.gamestate.isConnected,
              isMultiplayer: this.props.isMultiplayer
            }),
            React.createElement(Controls, {
              dockTop: this.state.dockControls,
              help: this.state.help,
              toggleHelp: this.toggleHelp,
              step: this.props.step,
              simulate: this.simulate,
              reset: this.props.reset,
              save: this.saveState,
              restore: this.restoreState
            }),
            React.createElement(
              'h3',
              null,
              'Players'
            ),
            React.createElement(PlayerInfo, {
              ctx: this.props.gamestate.ctx,
              playerID: this.props.playerID,
              onClick: this.props.updatePlayerID
            }),
            React.createElement(
              'h3',
              null,
              'Moves'
            ),
            React.createElement(
              'section',
              null,
              moves
            ),
            React.createElement(
              'h3',
              null,
              'Events'
            ),
            React.createElement(
              'section',
              null,
              events
            ),
            React.createElement(
              'section',
              null,
              React.createElement(
                'pre',
                { className: 'json' },
                React.createElement(
                  'strong',
                  null,
                  'G'
                ),
                ':',
                ' ',
                JSON.stringify(this.props.gamestate.G, null, 2)
              )
            ),
            React.createElement(
              'section',
              null,
              React.createElement(
                'pre',
                { className: 'json' },
                React.createElement(
                  'strong',
                  null,
                  'ctx'
                ),
                ':',
                ' ',
                JSON.stringify(SanitizeCtx(this.props.gamestate.ctx), null, 2)
              )
            )
          )
        )
      );
    }
  }]);

  return Debug;
}(React.Component);
Debug.propTypes = {
  gamestate: PropTypes.shape({
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    log: PropTypes.array.isOptional,
    isActive: PropTypes.bool,
    isConnected: PropTypes.bool,
    _initial: PropTypes.any.isOptional
  }),
  gameID: PropTypes.string.isRequired,
  playerID: PropTypes.number,
  isMultiplayer: PropTypes.bool,
  moves: PropTypes.any,
  events: PropTypes.any,
  restore: PropTypes.func,
  showLog: PropTypes.bool,
  store: PropTypes.any,
  step: PropTypes.func,
  reset: PropTypes.func,
  reducer: PropTypes.func,
  overrideGameState: PropTypes.func,
  visualizeAI: PropTypes.func,
  updateGameID: PropTypes.func,
  updatePlayerID: PropTypes.func,
  updateCredentials: PropTypes.func,
  showGameInfo: PropTypes.bool,
  dockControls: PropTypes.bool
};
Debug.defaultProps = {
  showGameInfo: true,
  dockControls: false
};

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

var MAKE_MOVE = 'MAKE_MOVE';
var GAME_EVENT = 'GAME_EVENT';
var RESTORE = 'RESTORE';
var RESET = 'RESET';
var UNDO = 'UNDO';
var REDO = 'REDO';

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * Generate a move to be dispatched to the game move reducer.
 *
 * @param {string} type - The move type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 */
var makeMove = function makeMove(type, args, playerID) {
  return {
    type: MAKE_MOVE,
    payload: { type: type, args: args, player_id: playerID }
  };
};

/**
 * Generate a game event to be dispatched to the flow reducer.
 *
 * @param {string} type - The event type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 */
var gameEvent = function gameEvent(type, args, playerID) {
  return {
    type: GAME_EVENT,
    payload: { type: type, args: args, player_id: playerID }
  };
};

/**
 * Used to reset the Redux store's state.
 * @param {object} state - The state to restore.
 */
var restore$1 = function restore(state) {
  return {
    type: RESTORE,
    state: state
  };
};

/**
 * Used to reset the game state.
 */
var reset = function reset() {
  return {
    type: RESET
  };
};

/**
 * Used to undo the last move.
 */
var undo = function undo() {
  return {
    type: UNDO
  };
};

/**
 * Used to redo the last undone move.
 */
var redo = function redo() {
  return {
    type: REDO
  };
};

var ActionCreators = Object.freeze({
	makeMove: makeMove,
	gameEvent: gameEvent,
	restore: restore$1,
	reset: reset,
	undo: undo,
	redo: redo
});

var _createClass$7 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO: How should we handle the licenses?
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * createDispatchers
 *
 * Create action dispatcher wrappers with bound playerID and credentials
 */
function createDispatchers(storeActionType, innerActionNames, store, playerID) {
  return innerActionNames.reduce(function (dispatchers, name) {
    dispatchers[name] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      store.dispatch(ActionCreators[storeActionType](name, args, playerID));
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
var createEventDispatchers = createDispatchers.bind(null, 'gameEvent');

/**
 * createMoveDispatchers
 *
 * Creates a set of dispatchers to make moves.
 * @param {Array} moveNames - A list of move names.
 * @param {object} store - The Redux store to create dispatchers for.
 * @param {string} playerID - The ID of the player dispatching these events.
 */
var createMoveDispatchers = createDispatchers.bind(null, 'makeMove');

/**
 * Implementation of Client (see below).
 */

var _ClientImpl = function () {
  function _ClientImpl(store, playerId) {
    var _this = this;

    _classCallCheck$7(this, _ClientImpl);

    this.store = store;
    this.playerID = playerId;

    this.reset = function () {
      _this.store.dispatch(reset());
    };
    this.undo = function () {
      _this.store.dispatch(undo());
    };
    this.redo = function () {
      _this.store.dispatch(redo());
    };

    this.createDispatchers();
  }

  _createClass$7(_ClientImpl, [{
    key: 'subscribe',
    value: function subscribe(fn) {
      this.store.subscribe(fn);

      if (this.multiplayerClient) {
        this.multiplayerClient.subscribe(fn);
      }
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.store.getState();
    }
  }, {
    key: 'connect',
    value: function connect() {
      if (this.multiplayerClient) {
        this.multiplayerClient.connect();
      }
    }
  }, {
    key: 'createDispatchers',
    value: function createDispatchers() {
      this.moves = createMoveDispatchers(this.store.getMoveNames(), this.store, this.playerID);

      // TODO: Enabling/disabling these events should be configurable.
      this.events = createEventDispatchers(['endTurn', 'endPhase', 'endGame', 'setActionPlayers'], this.store, this.playerID);
    }
  }]);

  return _ClientImpl;
}();

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


function RawClient(store) {
  return new _ClientImpl(store);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

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
function Client(_ref) {
  var _class, _temp;

  var board = _ref.board,
      proxy = _ref.proxy,
      playerId = _ref.playerId,
      players = _ref.players,
      multiplayer = _ref.multiplayer,
      debug = _ref.debug;

  if (debug === undefined) debug = true;

  /*
   * WrappedBoard
   *
   * The main React component that wraps the passed in
   * board component and adds the API to its props.
   */
  return _temp = _class = function (_React$Component) {
    _inherits(WrappedBoard, _React$Component);

    function WrappedBoard(props) {
      _classCallCheck(this, WrappedBoard);

      var _this = _possibleConstructorReturn(this, (WrappedBoard.__proto__ || Object.getPrototypeOf(WrappedBoard)).call(this, props));

      _this.state = {
        gameStateOverride: null
      };

      _this.updateGameID = function (gameID) {
        _this.client.updateGameID(gameID);
        _this.gameID = gameID;
        _this.forceUpdate();
      };

      _this.updatePlayerID = function (playerID) {
        _this.client.updatePlayerID(playerID);
        _this.playerID = playerID;
        _this.forceUpdate();
      };

      _this.updateCredentials = function (credentials) {
        _this.client.updateCredentials(credentials);
        _this.credentials = credentials;
        _this.forceUpdate();
      };

      _this.overrideGameState = function (state) {
        _this.setState({ gameStateOverride: state });
      };

      _this.proxy = proxy;
      _this.client = RawClient(proxy, props.playerID);

      _this.gameID = props.gameID;
      _this.playerID = props.playerID;

      _this.client.subscribe(function () {
        return _this.forceUpdate();
      });
      return _this;
    }

    _createClass(WrappedBoard, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
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
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.client.connect();
      }
    }, {
      key: 'render',
      value: function render() {
        var _board = null;
        var _debug = null;

        var state = this.client.getState();

        var _props = this.props,
            debugProp = _props.debug,
            rest = _objectWithoutProperties(_props, ['debug']);

        if (this.state.gameStateOverride) {
          state = _extends({}, state, this.state.gameStateOverride);
        }

        if (board) {
          _board = React.createElement(board, _extends({}, state, rest, {
            isMultiplayer: !!multiplayer,
            isSpectating: !!multiplayer ? multiplayer.isSpectating() : false,
            moves: this.client.moves,
            events: this.client.events,
            gameID: this.gameID,
            playerID: this.playerID,
            reset: this.client.reset,
            undo: this.client.undo,
            redo: this.client.redo
          }));
        }

        if (debug !== false && debugProp) {
          var showGameInfo = (typeof debug === 'undefined' ? 'undefined' : _typeof(debug)) === 'object' && debug.showGameInfo;
          var dockControls = (typeof debug === 'undefined' ? 'undefined' : _typeof(debug)) === 'object' && debug.dockControls;
          _debug = React.createElement(Debug, {
            gamestate: state,
            store: this.client.store,
            isMultiplayer: !!multiplayer,
            moves: this.client.moves,
            events: this.client.events,
            gameID: this.gameID,
            playerID: this.playerID,
            step: this.client.step,
            reset: this.client.reset,
            undo: this.client.undo,
            redo: this.client.redo,
            overrideGameState: this.overrideGameState,
            updateGameID: this.updateGameID,
            updatePlayerID: this.updatePlayerID,
            showGameInfo: showGameInfo,
            dockControls: dockControls
          });
        }

        return React.createElement(
          'div',
          { className: 'client' },
          React.createElement(
            'span',
            null,
            _debug,
            _board
          )
        );
      }
    }]);

    return WrappedBoard;
  }(React.Component), _class.propTypes = {
    // The ID of a game to connect to.
    // Only relevant in multiplayer.
    gameID: PropTypes.string,
    // The ID of the player associated with this client.
    // Only relevant in multiplayer.
    playerID: PropTypes.number,
    // Enable / disable the Debug UI.
    debug: PropTypes.any
  }, _class.defaultProps = {
    gameID: 'default',
    playerID: playerId,
    debug: true
  }, _temp;
}

exports.Loading = Loading;
exports.GameWrapper = GameWrapper;
exports.GameInfo = GameInfo;
exports.Client = Client;

Object.defineProperty(exports, '__esModule', { value: true });

})));
