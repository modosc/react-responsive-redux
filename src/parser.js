import MobileDetect from 'mobile-detect'

export const parser = (req) => {
  const md = new MobileDetect(req.headers['user-agent'])
  return {
    phone: !!md.phone(),
    tablet: !!md.tablet(),
    mobile: !!md.mobile(),
    desktop: !md.mobile(),
  }
}
