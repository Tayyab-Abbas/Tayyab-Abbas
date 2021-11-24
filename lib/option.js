'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = require('prop-types');
var React = require('react');
var addClass = require('./add-class');

var Option = function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      if (props.isSelected) {
        props.className = addClass(props.className, 'ic-tokeninput-selected');
        props.ariaSelected = true;
      }
      return React.createElement('div', props);
    }
  }]);

  return Option;
}(React.Component);

Option.propTypes = {

  /**
   * The value that will be sent to the `onSelect` handler of the
   * parent Combobox.
  */
  value: PropTypes.any.isRequired,

  /**
   * What value to put into the input element when this option is
   * selected, defaults to its children coerced to a string.
  */
  label: PropTypes.string,

  /**
   * Whether the element should be selectable
  */
  isFocusable: PropTypes.bool
};
Option.defaultProps = {
  role: 'option',
  tabIndex: '-1',
  className: 'ic-tokeninput-option',
  isSelected: false,
  isFocusable: true
};


module.exports = Option;