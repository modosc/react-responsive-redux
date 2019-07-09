import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { breakPoints } from './defaults';
export var MediaQueryWrapper = function MediaQueryWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
MediaQueryWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.string, PropTypes.symbol]),
  dispatch: PropTypes.func.isRequired,
  fakeWidth: PropTypes.number.isRequired
};
MediaQueryWrapper.defaultProps = {
  children: null,
  component: 'div'
};
export var responsiveWrapper = function responsiveWrapper() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return connect(function (state) {
    return _objectSpread({
      fakeWidth: state.responsive.fakeWidth
    }, props);
  })(MediaQueryWrapper);
};
export var XsScreen = responsiveWrapper({
  maxWidth: breakPoints.sm - 1
});
export var SmScreen = responsiveWrapper({
  query: "(min-width: ".concat(breakPoints.sm, "px) and (max-width: ").concat(breakPoints.md - 1, "px)")
});
export var MdScreen = responsiveWrapper({
  query: "(min-width: ".concat(breakPoints.md, "px) and (max-width: ").concat(breakPoints.lg - 1, "px)")
});
export var LgScreen = responsiveWrapper({
  query: "(min-width: ".concat(breakPoints.lg, "px)")
});
export var XsScreenHidden = responsiveWrapper({
  minWidth: breakPoints.sm
});
export var SmScreenHidden = responsiveWrapper({
  query: "(max-width: ".concat(breakPoints.sm - 1, "px), (min-width: ").concat(breakPoints.md, "px)")
});
export var MdScreenHidden = responsiveWrapper({
  query: "(max-width: ".concat(breakPoints.md - 1, "px), (min-width: ").concat(breakPoints.lg, "px)")
});
export var LgScreenHidden = responsiveWrapper({
  maxWidth: breakPoints.lg - 1
});
export { XsScreen as PhoneScreen };
export { SmScreen as TabletScreen };
export var DesktopScreen = responsiveWrapper({
  minWidth: breakPoints.md
});
export var MobileScreen = responsiveWrapper({
  maxWidth: breakPoints.md - 1
});
export { XsScreenHidden as PhoneScreenHidden };
export { SmScreenHidden as TabletScreenHidden };
export { MobileScreen as DesktopScreenHidden };
export { DesktopScreen as MobileScreenHidden };
//# sourceMappingURL=components.js.map