var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      other = _objectWithoutProperties(props, ['dispatch', 'fakeWidth', 'children']);

  var values = { deviceWidth: fakeWidth, width: fakeWidth };
  return React.createElement(
    MediaQuery,
    _extends({}, other, { values: values }),
    children
  );
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
    return _extends({ fakeWidth: state.responsive.fakeWidth }, props);
  })(MediaQueryWrapper);
};

export var PhoneScreen = responsiveWrapper({ maxWidth: breakPoints.phone });
export var TabletScreen = responsiveWrapper({ query: '(min-width: ' + (breakPoints.phone + 1) + 'px) and (max-width: ' + breakPoints.tablet + 'px)' });
export var DesktopScreen = responsiveWrapper({ minWidth: breakPoints.tablet + 1 });
export var MobileScreen = responsiveWrapper({ maxWidth: breakPoints.tablet });

export var PhoneScreenHidden = responsiveWrapper({ minWidth: breakPoints.phone + 1 });
export var TabletScreenHidden = responsiveWrapper({ query: '(max-width: ' + breakPoints.phone + 'px), (min-width: ' + (breakPoints.tablet + 1) + 'px)' });
export var DesktopScreenHidden = responsiveWrapper({ maxWidth: breakPoints.tablet });
export var MobileScreenHidden = responsiveWrapper({ minWidth: breakPoints.tablet + 1 });
//# sourceMappingURL=components.js.map