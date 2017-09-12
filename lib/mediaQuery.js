'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.features = exports.matchers = exports.types = exports.all = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // from https://raw.githubusercontent.com/contra/react-responsive/master/src/mediaQuery.js


require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

// properties that match media queries
var matchers = {
  orientation: _propTypes2.default.oneOf(['portrait', 'landscape']),

  scan: _propTypes2.default.oneOf(['progressive', 'interlace']),

  aspectRatio: _propTypes2.default.string,
  deviceAspectRatio: _propTypes2.default.string,

  height: stringOrNumber,
  deviceHeight: stringOrNumber,

  width: stringOrNumber,
  deviceWidth: stringOrNumber,

  color: _propTypes2.default.bool,

  colorIndex: _propTypes2.default.bool,

  monochrome: _propTypes2.default.bool,
  resolution: stringOrNumber

  // media features
};var features = _extends({
  minAspectRatio: _propTypes2.default.string,
  maxAspectRatio: _propTypes2.default.string,
  minDeviceAspectRatio: _propTypes2.default.string,
  maxDeviceAspectRatio: _propTypes2.default.string,

  minHeight: stringOrNumber,
  maxHeight: stringOrNumber,
  minDeviceHeight: stringOrNumber,
  maxDeviceHeight: stringOrNumber,

  minWidth: stringOrNumber,
  maxWidth: stringOrNumber,
  minDeviceWidth: stringOrNumber,
  maxDeviceWidth: stringOrNumber,

  minColor: _propTypes2.default.number,
  maxColor: _propTypes2.default.number,

  minColorIndex: _propTypes2.default.number,
  maxColorIndex: _propTypes2.default.number,

  minMonochrome: _propTypes2.default.number,
  maxMonochrome: _propTypes2.default.number,

  minResolution: stringOrNumber,
  maxResolution: stringOrNumber

}, matchers);

// media types
var types = {
  all: _propTypes2.default.bool,
  grid: _propTypes2.default.bool,
  aural: _propTypes2.default.bool,
  braille: _propTypes2.default.bool,
  handheld: _propTypes2.default.bool,
  print: _propTypes2.default.bool,
  projection: _propTypes2.default.bool,
  screen: _propTypes2.default.bool,
  tty: _propTypes2.default.bool,
  tv: _propTypes2.default.bool,
  embossed: _propTypes2.default.bool
};

var all = _extends({}, types, features);

// add the type property
matchers.type = Object.keys(types);

exports.all = all;
exports.types = types;
exports.matchers = matchers;
exports.features = features;
//# sourceMappingURL=mediaQuery.js.map