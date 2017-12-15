import MobileDetect from 'mobile-detect';
export var mobileParser = function mobileParser() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers;

  var ua = headers['user-agent'] || headers['User-Agent'];
  var md = new MobileDetect(ua);
  return {
    phone: !!md.phone(),
    tablet: !!md.tablet(),
    mobile: !!md.mobile(),
    desktop: !md.mobile()
  };
};
//# sourceMappingURL=parser.js.map