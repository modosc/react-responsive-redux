'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileScreenHidden = exports.DesktopScreenHidden = exports.TabletScreenHidden = exports.PhoneScreenHidden = exports.MobileScreen = exports.DesktopScreen = exports.TabletScreen = exports.PhoneScreen = exports.responsiveWrapper = exports.MediaQueryWrapper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _reactRedux = require('react-redux');

var _defaults = require('./defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // see also components/ScreenSize for another way to consume this data


var MediaQueryWrapper = function MediaQueryWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // eslint-disable-next-line no-unused-vars
  var dispatch = props.dispatch,
      fakeWidth = props.fakeWidth,
      children = props.children,
      other = _objectWithoutProperties(props, ['dispatch', 'fakeWidth', 'children']);

  var values = { deviceWidth: fakeWidth, width: fakeWidth };
  return _react2.default.createElement(
    _reactResponsive2.default,
    _extends({}, other, { values: values }),
    children
  );
};

exports.MediaQueryWrapper = MediaQueryWrapper;
MediaQueryWrapper.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  dispatch: _propTypes2.default.func.isRequired,
  fakeWidth: _propTypes2.default.number.isRequired
};

MediaQueryWrapper.defaultProps = {
  children: null
};

var responsiveWrapper = exports.responsiveWrapper = function responsiveWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _reactRedux.connect)(function (state) {
    return _extends({ fakeWidth: state.responsive.fakeWidth }, props);
  })(MediaQueryWrapper);
};

var PhoneScreen = exports.PhoneScreen = responsiveWrapper({ maxWidth: _defaults.breakPoints.phone });
var TabletScreen = exports.TabletScreen = responsiveWrapper({ query: '(min-width: ' + (_defaults.breakPoints.phone + 1) + 'px) and (max-width: ' + _defaults.breakPoints.tablet + 'px)' });
var DesktopScreen = exports.DesktopScreen = responsiveWrapper({ minWidth: _defaults.breakPoints.tablet + 1 });
var MobileScreen = exports.MobileScreen = responsiveWrapper({ maxWidth: _defaults.breakPoints.tablet });

var PhoneScreenHidden = exports.PhoneScreenHidden = responsiveWrapper({ minWidth: _defaults.breakPoints.phone + 1 });
var TabletScreenHidden = exports.TabletScreenHidden = responsiveWrapper({ query: '(max-width: ' + _defaults.breakPoints.phone + 'px), (min-width: ' + (_defaults.breakPoints.tablet + 1) + 'px)' });
var DesktopScreenHidden = exports.DesktopScreenHidden = responsiveWrapper({ maxWidth: _defaults.breakPoints.tablet });
var MobileScreenHidden = exports.MobileScreenHidden = responsiveWrapper({ minWidth: _defaults.breakPoints.tablet + 1 });
//# sourceMappingURL=components.js.map