"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.defaultSize = exports.setMobileDetect = exports.SET_MOBILE_DETECT = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _defaults = require("./defaults");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
        var _initialState$action = _objectSpread(_objectSpread({}, initialState), action),
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

        return _objectSpread(_objectSpread({}, state), {}, {
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