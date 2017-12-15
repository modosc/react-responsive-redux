// based on bootstrap and  http://www.websitedimensions.com/
// these are the maximum values for the device type so <= phone is a phone,
// > phone && <= tablet is a tablet, and > tablet is a desktop
export const breakPoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
}

export const defaultSizes = {
  // the phone value covers portrait and landscape - there's no way to tell the
  // difference from the request unless we have client hints (which don't work
  // on the first request anyway) or something similar
  phone: breakPoints.sm - 1,
  // this is tricky too - we're going by what bootstrap uses as a default but
  // an ipad in portrait mode will match here even though the width might be
  // 1024, 1112, or 1366. for now leave as is - in the future we could handle
  // this by compiling a list of resolutions but that's a huge undertaking.
  tablet: breakPoints.md - 1,
  // this comes from bootstrap lg which we use this as our default desktop size
  // (even though technically > 991 is desktop most seem to fall here).
  desktop: breakPoints.lg,
}
