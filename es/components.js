import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
// see also components/ScreenSize for another way to consume this data
import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { breakPoints } from './defaults';

var MediaQueryWrapper = function MediaQueryWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // eslint-disable-next-line no-unused-vars
  var dispatch = props.dispatch,
      fakeWidth = props.fakeWidth,
      children = props.children,
      other = _objectWithoutProperties(props, ["dispatch", "fakeWidth", "children"]);

  var values = {
    deviceWidth: fakeWidth,
    width: fakeWidth
  };
  return React.createElement(MediaQuery, _extends({}, other, {
    values: values
  }), children);
};

export { MediaQueryWrapper };
MediaQueryWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  dispatch: PropTypes.func.isRequired,
  fakeWidth: PropTypes.number.isRequired
};
MediaQueryWrapper.defaultProps = {
  children: null
};
export var responsiveWrapper = function responsiveWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return connect(function (state) {
    return _extends({
      fakeWidth: state.responsive.fakeWidth
    }, props);
  })(MediaQueryWrapper);
};
export var PhoneScreen = responsiveWrapper({
  maxWidth: breakPoints.phone
});
export var TabletScreen = responsiveWrapper({
  query: "(min-width: ".concat(breakPoints.phone + 1, "px) and (max-width: ").concat(breakPoints.tablet, "px)")
});
export var DesktopScreen = responsiveWrapper({
  minWidth: breakPoints.tablet + 1
});
export var MobileScreen = responsiveWrapper({
  maxWidth: breakPoints.tablet
});
export var PhoneScreenHidden = responsiveWrapper({
  minWidth: breakPoints.phone + 1
});
export var TabletScreenHidden = responsiveWrapper({
  query: "(max-width: ".concat(breakPoints.phone, "px), (min-width: ").concat(breakPoints.tablet + 1, "px)")
});
export var DesktopScreenHidden = responsiveWrapper({
  maxWidth: breakPoints.tablet
});
export var MobileScreenHidden = responsiveWrapper({
  minWidth: breakPoints.tablet + 1
});
//# sourceMappingURL=components.js.map