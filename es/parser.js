import MobileDetect from 'mobile-detect';

export var parser = function parser(req) {
  var md = new MobileDetect(req.headers['user-agent']);
  return {
    phone: !!md.phone(),
    tablet: !!md.tablet(),
    mobile: !!md.mobile(),
    desktop: !md.mobile()
  };
};
//# sourceMappingURL=parser.js.map