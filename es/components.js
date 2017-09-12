var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// see also components/ScreenSize for another way to consume this data
import React from 'react';
import MediaQuery from 'react-responsive';
import omit from 'lodash.omit';
import { connect } from 'react-redux';
import { breakPoints } from './defaults';

// ugly ugly ugly ugly but how else can we get this? it's not exported publicly
import { features } from './mediaQuery';

var responsiveWrapper = function responsiveWrapper(query) {
  return connect(function (state) {
    return { fakeWidth: state.responsive.fakeWidth };
  })(function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // eslint-disable-next-line no-unused-vars
    var dispatch = props.dispatch,
        fakeWidth = props.fakeWidth,
        _other = _objectWithoutProperties(props, ['dispatch', 'fakeWidth']);
    // we're going to omit every prop that react-responsive responds to so
    // our caller doesn't accidentally overwrite stuff


    var other = omit(_other, Object.keys(features));
    var values = { deviceWidth: fakeWidth, width: fakeWidth };
    return React.createElement(
      MediaQuery,
      _extends({ query: query, values: values }, other),
      props.children
    );
  });
};

export { responsiveWrapper };
export var PhoneScreen = responsiveWrapper('(max-width: ' + breakPoints.phone + 'px)');
export var TabletScreen = responsiveWrapper('(min-width: ' + (breakPoints.phone + 1) + 'px) and (max-width: ' + breakPoints.tablet + 'px)');
export var DesktopScreen = responsiveWrapper('(min-width: ' + (breakPoints.tablet + 1) + 'px)');
export var MobileScreen = responsiveWrapper('(max-width: ' + breakPoints.tablet + 'px)');

export var PhoneScreenHidden = responsiveWrapper('(min-width: ' + (breakPoints.phone + 1) + 'px)');
export var TabletScreenHidden = responsiveWrapper('(max-width: ' + breakPoints.phone + 'px) or (min-width: ' + (breakPoints.tablet + 1) + 'px)');
export var DesktopScreenHidden = responsiveWrapper('(max-width: ' + breakPoints.tablet + 'px)');
export var MobileScreenHidden = responsiveWrapper('(min-width: ' + (breakPoints.tablet + 1) + 'px)');
//# sourceMappingURL=components.js.map