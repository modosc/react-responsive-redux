var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// from https://raw.githubusercontent.com/contra/react-responsive/master/src/mediaQuery.js
import 'react';
import PropTypes from 'prop-types';

var stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

// properties that match media queries
var matchers = {
  orientation: PropTypes.oneOf(['portrait', 'landscape']),

  scan: PropTypes.oneOf(['progressive', 'interlace']),

  aspectRatio: PropTypes.string,
  deviceAspectRatio: PropTypes.string,

  height: stringOrNumber,
  deviceHeight: stringOrNumber,

  width: stringOrNumber,
  deviceWidth: stringOrNumber,

  color: PropTypes.bool,

  colorIndex: PropTypes.bool,

  monochrome: PropTypes.bool,
  resolution: stringOrNumber

  // media features
};var features = _extends({
  minAspectRatio: PropTypes.string,
  maxAspectRatio: PropTypes.string,
  minDeviceAspectRatio: PropTypes.string,
  maxDeviceAspectRatio: PropTypes.string,

  minHeight: stringOrNumber,
  maxHeight: stringOrNumber,
  minDeviceHeight: stringOrNumber,
  maxDeviceHeight: stringOrNumber,

  minWidth: stringOrNumber,
  maxWidth: stringOrNumber,
  minDeviceWidth: stringOrNumber,
  maxDeviceWidth: stringOrNumber,

  minColor: PropTypes.number,
  maxColor: PropTypes.number,

  minColorIndex: PropTypes.number,
  maxColorIndex: PropTypes.number,

  minMonochrome: PropTypes.number,
  maxMonochrome: PropTypes.number,

  minResolution: stringOrNumber,
  maxResolution: stringOrNumber

}, matchers);

// media types
var types = {
  all: PropTypes.bool,
  grid: PropTypes.bool,
  aural: PropTypes.bool,
  braille: PropTypes.bool,
  handheld: PropTypes.bool,
  print: PropTypes.bool,
  projection: PropTypes.bool,
  screen: PropTypes.bool,
  tty: PropTypes.bool,
  tv: PropTypes.bool,
  embossed: PropTypes.bool
};

var all = _extends({}, types, features);

// add the type property
matchers.type = Object.keys(types);

export { all, types, matchers, features };
//# sourceMappingURL=mediaQuery.js.map