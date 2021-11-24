'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = require('prop-types');
var React = require('react');
var Combobox = require('./combobox');
var Token = require('./token');
var classnames = require('classnames');

var TokenInput = function (_React$Component) {
  _inherits(TokenInput, _React$Component);

  function TokenInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TokenInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TokenInput.__proto__ || Object.getPrototypeOf(TokenInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedToken: null
    }, _this.handleClick = function () {
      // TODO: Expand combobox API for focus
      _this.comboLi.querySelector('input').focus();
    }, _this.handleFocus = function () {
      if (_this.props.onFocus) {
        _this.props.onFocus();
      }
    }, _this.handleInput = function (inputValue) {
      _this.props.onInput(inputValue);
    }, _this.handleSelect = function (event, option) {
      var input = _this.comboLi.querySelector('input');
      _this.props.onSelect(event, option);
      _this.setState({
        selectedToken: null
      });
      _this.props.onInput(input.value);
    }, _this.handleRemove = function (value) {
      var input = _this.comboLi.querySelector('input');
      _this.props.onRemove(value);
      input.focus();
    }, _this.handleRemoveLast = function () {
      _this.props.onRemove(_this.props.selected[_this.props.selected.length - 1]);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TokenInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isDisabled = this.props.isDisabled;
      var tokens = this.props.selected.map(function (token) {
        return React.createElement(Token, {
          tokenAriaFunc: this.props.tokenAriaFunc,
          onFocus: this.handleFocus,
          onRemove: this.handleRemove,
          value: token,
          name: token.name,
          key: token.id });
      }.bind(this));

      var classes = classnames('ic-tokens flex', {
        'ic-tokens-disabled': isDisabled
      });

      return React.createElement(
        'ul',
        { className: classes, onClick: this.handleClick },
        tokens,
        React.createElement(
          'li',
          { className: 'inline-flex', ref: function ref(e) {
              return _this2.comboLi = e;
            } },
          React.createElement(
            Combobox,
            {
              id: this.props.id,
              'aria-label': this.props['combobox-aria-label'],
              ariaDisabled: isDisabled,
              onFocus: this.handleFocus,
              onInput: this.handleInput,
              showListOnFocus: this.props.showListOnFocus,
              onSelect: this.handleSelect,
              onRemoveLast: this.handleRemoveLast,
              value: this.state.selectedToken,
              isDisabled: isDisabled,
              placeholder: this.props.placeholder },
            this.props.menuContent
          )
        ),
        this.props.isLoading && React.createElement(
          'li',
          { className: 'ic-tokeninput-loading flex' },
          this.props.loadingComponent
        )
      );
    }
  }]);

  return TokenInput;
}(React.Component);

TokenInput.propTypes = {
  isLoading: PropTypes.bool,
  loadingComponent: PropTypes.any,
  onFocus: PropTypes.func,
  onInput: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  tokenAriaFunc: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  menuContent: PropTypes.any,
  showListOnFocus: PropTypes.bool,
  placeholder: PropTypes.string
};


module.exports = TokenInput;