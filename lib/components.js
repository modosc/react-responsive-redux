"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesktopScreenHidden = exports.MobileScreen = exports.MobileScreenHidden = exports.DesktopScreen = exports.LgScreenHidden = exports.MdScreenHidden = exports.TabletScreenHidden = exports.SmScreenHidden = exports.PhoneScreenHidden = exports.XsScreenHidden = exports.LgScreen = exports.MdScreen = exports.TabletScreen = exports.SmScreen = exports.PhoneScreen = exports.XsScreen = exports.responsiveWrapper = exports.MediaQueryWrapper = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _reactRedux = require("react-redux");

var _defaults = require("./defaults");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } else { ownKeys(arguments[i]).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(arguments[i], key)); }); } } return target; }

var MediaQueryWrapper = function MediaQueryWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var dispatch = props.dispatch,
      fakeWidth = props.fakeWidth,
      children = props.children,
      other = (0, _objectWithoutProperties2["default"])(props, ["dispatch", "fakeWidth", "children"]);
  var values = {
    deviceWidth: fakeWidth,
    width: fakeWidth
  };
  return _react["default"].createElement(_reactResponsive["default"], (0, _extends2["default"])({}, other, {
    values: values
  }), children);
};

exports.MediaQueryWrapper = MediaQueryWrapper;
MediaQueryWrapper.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),
  component: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func, _propTypes["default"].string, _propTypes["default"].symbol]),
  dispatch: _propTypes["default"].func.isRequired,
  fakeWidth: _propTypes["default"].number.isRequired
};
MediaQueryWrapper.defaultProps = {
  children: null,
  component: 'div'
};

var responsiveWrapper = function responsiveWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _reactRedux.connect)(function (state) {
    return _objectSpread({
      fakeWidth: state.responsive.fakeWidth
    }, props);
  })(MediaQueryWrapper);
};

exports.responsiveWrapper = responsiveWrapper;
var XsScreen = responsiveWrapper({
  maxWidth: _defaults.breakPoints.sm - 1
});
exports.PhoneScreen = exports.XsScreen = XsScreen;
var SmScreen = responsiveWrapper({
  query: "(min-width: ".concat(_defaults.breakPoints.sm, "px) and (max-width: ").concat(_defaults.breakPoints.md - 1, "px)")
});
exports.TabletScreen = exports.SmScreen = SmScreen;
var MdScreen = responsiveWrapper({
  query: "(min-width: ".concat(_defaults.breakPoints.md, "px) and (max-width: ").concat(_defaults.breakPoints.lg - 1, "px)")
});
exports.MdScreen = MdScreen;
var LgScreen = responsiveWrapper({
  query: "(min-width: ".concat(_defaults.breakPoints.lg, "px)")
});
exports.LgScreen = LgScreen;
var XsScreenHidden = responsiveWrapper({
  minWidth: _defaults.breakPoints.sm
});
exports.PhoneScreenHidden = exports.XsScreenHidden = XsScreenHidden;
var SmScreenHidden = responsiveWrapper({
  query: "(max-width: ".concat(_defaults.breakPoints.sm - 1, "px), (min-width: ").concat(_defaults.breakPoints.md, "px)")
});
exports.TabletScreenHidden = exports.SmScreenHidden = SmScreenHidden;
var MdScreenHidden = responsiveWrapper({
  query: "(max-width: ".concat(_defaults.breakPoints.md - 1, "px), (min-width: ").concat(_defaults.breakPoints.lg, "px)")
});
exports.MdScreenHidden = MdScreenHidden;
var LgScreenHidden = responsiveWrapper({
  maxWidth: _defaults.breakPoints.lg - 1
});
exports.LgScreenHidden = LgScreenHidden;
var DesktopScreen = responsiveWrapper({
  minWidth: _defaults.breakPoints.md
});
exports.MobileScreenHidden = exports.DesktopScreen = DesktopScreen;
var MobileScreen = responsiveWrapper({
  maxWidth: _defaults.breakPoints.md - 1
});
exports.DesktopScreenHidden = exports.MobileScreen = MobileScreen;
//# sourceMappingURL=components.js.map