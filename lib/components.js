"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileScreenHidden = exports.DesktopScreenHidden = exports.TabletScreenHidden = exports.PhoneScreenHidden = exports.MobileScreen = exports.DesktopScreen = exports.TabletScreen = exports.PhoneScreen = exports.responsiveWrapper = exports.MediaQueryWrapper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _reactRedux = require("react-redux");

var _defaults = require("./defaults");

// see also components/ScreenSize for another way to consume this data
var MediaQueryWrapper = function MediaQueryWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // eslint-disable-next-line no-unused-vars
  var dispatch = props.dispatch,
      fakeWidth = props.fakeWidth,
      children = props.children,
      other = (0, _objectWithoutProperties2.default)(props, ["dispatch", "fakeWidth", "children"]);
  var values = {
    deviceWidth: fakeWidth,
    width: fakeWidth
  };
  return _react.default.createElement(_reactResponsive.default, (0, _extends2.default)({}, other, {
    values: values
  }), children);
};

exports.MediaQueryWrapper = MediaQueryWrapper;
MediaQueryWrapper.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  dispatch: _propTypes.default.func.isRequired,
  fakeWidth: _propTypes.default.number.isRequired
};
MediaQueryWrapper.defaultProps = {
  children: null
};

var responsiveWrapper = function responsiveWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _reactRedux.connect)(function (state) {
    return (0, _extends2.default)({
      fakeWidth: state.responsive.fakeWidth
    }, props);
  })(MediaQueryWrapper);
};

exports.responsiveWrapper = responsiveWrapper;
var PhoneScreen = responsiveWrapper({
  maxWidth: _defaults.breakPoints.phone
});
exports.PhoneScreen = PhoneScreen;
var TabletScreen = responsiveWrapper({
  query: "(min-width: ".concat(_defaults.breakPoints.phone + 1, "px) and (max-width: ").concat(_defaults.breakPoints.tablet, "px)")
});
exports.TabletScreen = TabletScreen;
var DesktopScreen = responsiveWrapper({
  minWidth: _defaults.breakPoints.tablet + 1
});
exports.DesktopScreen = DesktopScreen;
var MobileScreen = responsiveWrapper({
  maxWidth: _defaults.breakPoints.tablet
});
exports.MobileScreen = MobileScreen;
var PhoneScreenHidden = responsiveWrapper({
  minWidth: _defaults.breakPoints.phone + 1
});
exports.PhoneScreenHidden = PhoneScreenHidden;
var TabletScreenHidden = responsiveWrapper({
  query: "(max-width: ".concat(_defaults.breakPoints.phone, "px), (min-width: ").concat(_defaults.breakPoints.tablet + 1, "px)")
});
exports.TabletScreenHidden = TabletScreenHidden;
var DesktopScreenHidden = responsiveWrapper({
  maxWidth: _defaults.breakPoints.tablet
});
exports.DesktopScreenHidden = DesktopScreenHidden;
var MobileScreenHidden = responsiveWrapper({
  minWidth: _defaults.breakPoints.tablet + 1
});
exports.MobileScreenHidden = MobileScreenHidden;
//# sourceMappingURL=components.js.map