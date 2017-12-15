"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSizes = exports.breakPoints = void 0;
var breakPoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200
};
exports.breakPoints = breakPoints;
var defaultSizes = {
  phone: breakPoints.sm - 1,
  tablet: breakPoints.md - 1,
  desktop: breakPoints.lg
};
exports.defaultSizes = defaultSizes;
//# sourceMappingURL=defaults.js.map