'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mobileParser = undefined;

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileParser = exports.mobileParser = function mobileParser() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? {} : _ref$headers;

  var ua = headers['user-agent'] || headers['User-Agent'];
  var md = new _mobileDetect2.default(ua);
  return {
    phone: !!md.phone(),
    tablet: !!md.tablet(),
    mobile: !!md.mobile(),
    desktop: !md.mobile()
  };
};
//# sourceMappingURL=parser.js.map