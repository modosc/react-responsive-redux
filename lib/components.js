'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileScreenHidden = exports.DesktopScreenHidden = exports.TabletScreenHidden = exports.PhoneScreenHidden = exports.MobileScreen = exports.DesktopScreen = exports.TabletScreen = exports.PhoneScreen = exports.responsiveWrapper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRedux = require('react-redux');

var _defaults = require('./defaults');

var _mediaQuery = require('./mediaQuery');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // see also components/ScreenSize for another way to consume this data


// ugly ugly ugly ugly but how else can we get this? it's not exported publicly


var responsiveWrapper = function responsiveWrapper(query) {
  return (0, _reactRedux.connect)(function (state) {
    return { fakeWidth: state.responsive.fakeWidth };
  })(function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // eslint-disable-next-line no-unused-vars
    var dispatch = props.dispatch,
        fakeWidth = props.fakeWidth,
        _other = _objectWithoutProperties(props, ['dispatch', 'fakeWidth']);
    // we're going to omit every prop that react-responsive responds to so
    // our caller doesn't accidentally overwrite stuff


    var other = (0, _lodash2.default)(_other, Object.keys(_mediaQuery.features));
    var values = { deviceWidth: fakeWidth, width: fakeWidth };
    return _react2.default.createElement(
      _reactResponsive2.default,
      _extends({ query: query, values: values }, other),
      props.children
    );
  });
};

exports.responsiveWrapper = responsiveWrapper;
var PhoneScreen = exports.PhoneScreen = responsiveWrapper('(max-width: ' + _defaults.breakPoints.phone + 'px)');
var TabletScreen = exports.TabletScreen = responsiveWrapper('(min-width: ' + (_defaults.breakPoints.phone + 1) + 'px) and (max-width: ' + _defaults.breakPoints.tablet + 'px)');
var DesktopScreen = exports.DesktopScreen = responsiveWrapper('(min-width: ' + (_defaults.breakPoints.tablet + 1) + 'px)');
var MobileScreen = exports.MobileScreen = responsiveWrapper('(max-width: ' + _defaults.breakPoints.tablet + 'px)');

var PhoneScreenHidden = exports.PhoneScreenHidden = responsiveWrapper('(min-width: ' + (_defaults.breakPoints.phone + 1) + 'px)');
var TabletScreenHidden = exports.TabletScreenHidden = responsiveWrapper('(max-width: ' + _defaults.breakPoints.phone + 'px) or (min-width: ' + (_defaults.breakPoints.tablet + 1) + 'px)');
var DesktopScreenHidden = exports.DesktopScreenHidden = responsiveWrapper('(max-width: ' + _defaults.breakPoints.tablet + 'px)');
var MobileScreenHidden = exports.MobileScreenHidden = responsiveWrapper('(min-width: ' + (_defaults.breakPoints.tablet + 1) + 'px)');
//# sourceMappingURL=components.js.map