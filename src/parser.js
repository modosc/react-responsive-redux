import MobileDetect from 'mobile-detect'

export const mobileParser = ({ headers = {} } = {}) => {
  const ua = headers['user-agent'] || headers['User-Agent']
  const md = new MobileDetect(ua)
  return {
    phone: !!md.phone(),
    tablet: !!md.tablet(),
    mobile: !!md.mobile(),
    desktop: !md.mobile(),
  }
}
