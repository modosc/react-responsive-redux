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
}; // TODO - allow users to pass this in - we have to share it with our components
// too though so maybe we need a getter/setter on our entire class?
// default to a desktop size if in doubt


exports.setMobileDetect = setMobileDetect;
var defaultSize = _defaults.breakPoints.dektop;
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
        // use initialState as the default values
        var _initialState$action = (0, _extends2.default)({}, initialState, action),
            mobile = _initialState$action.mobile,
            tablet = _initialState$action.tablet,
            phone = _initialState$action.phone,
            desktop = _initialState$action.desktop;

        var fakeWidth;

        if (mobile) {
          if (phone) {
            fakeWidth = _defaults.breakPoints.phone;
          } else if (tablet) {
            fakeWidth = _defaults.breakPoints.tablet;
          } else {
            // TODO - should we ever get here? default to the lowest value i guess
            fakeWidth = _defaults.breakPoints.phone;
          }
        } else if (desktop) {
          fakeWidth = _defaults.breakPoints.desktop;
        } else {
          // nothing set, default to our defaultSize
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