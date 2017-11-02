'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.defaultSize = exports.setMobileDetect = exports.SET_MOBILE_DETECT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _defaults = require('./defaults');

var SET_MOBILE_DETECT = exports.SET_MOBILE_DETECT = '@@react-responsive-redux/SET_MOBILE_DETECT';

var setMobileDetect = exports.setMobileDetect = function setMobileDetect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      phone = _ref.phone,
      tablet = _ref.tablet,
      mobile = _ref.mobile,
      desktop = _ref.desktop;

  return {
    type: SET_MOBILE_DETECT, phone: phone, tablet: tablet, mobile: mobile, desktop: desktop
  };
};

// TODO - allow users to pass this in - we have to share it with our components
// too though so maybe we need a getter/setter on our entire class?

// default to a desktop size if in doubt
var defaultSize = exports.defaultSize = _defaults.breakPoints.tablet + 1;

var initialState = exports.initialState = {
  phone: false,
  tablet: false,
  mobile: false,
  desktop: false,
  fakeWidth: defaultSize
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case SET_MOBILE_DETECT:
      {
        // use initialState as the default values
        var _initialState$action = _extends({}, initialState, action),
            mobile = _initialState$action.mobile,
            tablet = _initialState$action.tablet,
            phone = _initialState$action.phone,
            desktop = _initialState$action.desktop;

        var fakeWidth = void 0;

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
          fakeWidth = _defaults.breakPoints.tablet + 1;
        } else {
          // nothing set, default to our defaultSize
          fakeWidth = defaultSize;
        }

        return _extends({}, state, { mobile: mobile, tablet: tablet, phone: phone, desktop: desktop, fakeWidth: fakeWidth
        });
      }
    default:
      return state;
  }
};
//# sourceMappingURL=redux.js.map