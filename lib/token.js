'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Token = function (_React$Component) {
  _inherits(Token, _React$Component);

  function Token() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Token);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Token.__proto__ || Object.getPrototypeOf(Token)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.onRemove(_this.props.value);
    }, _this.handleKeyDown = function (key) {
      var enterKey = 13;
      if (key.keyCode === enterKey) _this.props.onRemove(_this.props.value);
    }, _this.ariaLabelRemove = function () {
      return _this.props.tokenAriaFunc ? _this.props.tokenAriaFunc(_this.props.name) : 'Remove \'' + _this.props.name + '\'';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Token, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        { className: 'ic-token inline-flex' },
        React.createElement(
          'span',
          { className: 'ic-token-label' },
          this.props.name
        ),
        React.createElement(
          'span',
          {
            role: 'button',
            onClick: this.handleClick,
            onFocus: this.props.onFocus,
            onKeyDown: this.handleKeyDown,
            'aria-label': this.ariaLabelRemove(),
            className: 'ic-token-delete-button',
            tabIndex: 0 },
          '\u2715'
        )
      );
    }
  }]);

  return Token;
}(React.Component);

module.exports = Token;