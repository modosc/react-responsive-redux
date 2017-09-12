'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parser = undefined;

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parser = exports.parser = function parser(req) {
  var md = new _mobileDetect2.default(req.headers['user-agent']);
  return {
    phone: md.phone(),
    tablet: md.tablet(),
    mobile: md.mobile(),
    desktop: md.desktop()
  };
};
//# sourceMappingURL=parser.js.map