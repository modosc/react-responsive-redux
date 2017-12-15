"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.defaultSize = exports.setMobileDetect = exports.SET_MOBILE_DETECT = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defaults = require("./defaults");

var SET_MOBILE_DETECT = '@@react-responsive-redux/SET_MOBILE_DETECT';
exports.SET_MOBILE_DETECT = SET_MOBILE_DETECT;

var setMobileDetect = function setMobileDetect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      phone = _ref.phone,
      tablet = _ref.tablet,
      mobile = _ref.mobile,
      desktop = _ref.desktop;

  return {
    type: SET_MOBILE_DETECT,
    phone: phone,
    tablet: tablet,
    mobile: mobile,
    desktop: desktop
  };
};

exports.setMobileDetect = setMobileDetect;
var defaultSize = _defaults.defaultSizes.desktop;
exports.defaultSize = defaultSize;
var initialState = {
  phone: false,
  tablet: false,
  mobile: false,
  desktop: false,
  fakeWidth: defaultSize
};
exports.initialState = initialState;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_MOBILE_DETECT:
      {
        var _initialState$action = (0, _extends2.default)({}, initialState, action),
            mobile = _initialState$action.mobile,
            tablet = _initialState$action.tablet,
            phone = _initialState$action.phone,
            desktop = _initialState$action.desktop;

        var fakeWidth;

        if (mobile) {
          if (phone) {
            fakeWidth = _defaults.defaultSizes.phone;
          } else if (tablet) {
            fakeWidth = _defaults.defaultSizes.tablet;
          } else {
            fakeWidth = _defaults.defaultSizes.phone;
          }
        } else if (desktop) {
          fakeWidth = _defaults.defaultSizes.desktop;
        } else {
          fakeWidth = defaultSize;
        }

        return (0, _extends2.default)({}, state, {
          mobile: mobile,
          tablet: tablet,
          phone: phone,
          desktop: desktop,
          fakeWidth: fakeWidth
        });
      }

    default:
      return state;
  }
};

exports.reducer = reducer;
//# sourceMappingURL=redux.js.map