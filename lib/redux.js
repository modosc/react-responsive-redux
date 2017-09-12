'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildReducer = exports.setMobileDetect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _defaults = require('./defaults');

var SET_MOBILE_DETECT = '@@react-responsive-redux/SET_MOBILE_DETECT';

var setMobileDetect = exports.setMobileDetect = function setMobileDetect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      phone = _ref.phone,
      tablet = _ref.tablet,
      mobile = _ref.mobile,
      desktop = _ref.desktop;

  return { type: SET_MOBILE_DETECT, phone: phone, tablet: tablet, mobile: mobile, desktop: desktop };
};

var buildReducer = exports.buildReducer = function buildReducer(_ref2) {
  var _ref2$sizes = _ref2.sizes,
      sizes = _ref2$sizes === undefined ? defaultSizes : _ref2$sizes,
      _ref2$defaultSize = _ref2.defaultSize,
      defaultSize = _ref2$defaultSize === undefined ? sizes.desktop : _ref2$defaultSize;

  var initialState = {
    phone: false,
    tablet: false,
    mobile: false,
    fakeWidth: defaultSize
  };

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
      case actions.SET_MOBILE_DETECT:
        {
          var _actions = actions,
              mobile = _actions.mobile,
              tablet = _actions.tablet,
              phone = _actions.phone,
              desktop = _actions.desktop;


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
          } else {
            fakeWidth = _defaults.breakPoints.tablet + 1;
          }
          return _extends({}, state, { mobile: mobile, tablet: tablet, phone: phone, desktop: desktop, fakeWidth: fakeWidth });
        }
      default:
        return state;
    }
  };
};
//# sourceMappingURL=redux.js.map