var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { breakPoints as defaultBreakPoints } from './defaults';

var SET_MOBILE_DETECT = '@@react-responsive-redux/SET_MOBILE_DETECT';

export var setMobileDetect = function setMobileDetect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      phone = _ref.phone,
      tablet = _ref.tablet,
      mobile = _ref.mobile,
      desktop = _ref.desktop;

  return { type: SET_MOBILE_DETECT, phone: phone, tablet: tablet, mobile: mobile, desktop: desktop };
};

export var buildResponsiveReducer = function buildResponsiveReducer() {
  // TODO - allow users to pass this in - we have to share it with our components
  // too though so maybe we need a getter/setter on our entire class?

  var breakPoints = defaultBreakPoints;
  // default to a desktop size if in doubt
  var defaultSize = defaultBreakPoints.tablet + 1;

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
      case SET_MOBILE_DETECT:
        {
          var mobile = action.mobile,
              tablet = action.tablet,
              phone = action.phone,
              desktop = action.desktop;


          var fakeWidth = void 0;
          if (mobile) {
            if (phone) {
              fakeWidth = breakPoints.phone;
            } else if (tablet) {
              fakeWidth = breakPoints.tablet;
            } else {
              // TODO - should we ever get here? default to the lowest value i guess
              fakeWidth = breakPoints.phone;
            }
          } else {
            fakeWidth = breakPoints.tablet + 1;
          }
          return _extends({}, state, { mobile: mobile, tablet: tablet, phone: phone, desktop: desktop, fakeWidth: fakeWidth });
        }
      default:
        return state;
    }
  };
};
//# sourceMappingURL=redux.js.map