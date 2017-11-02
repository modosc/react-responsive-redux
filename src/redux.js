import { breakPoints } from './defaults'

export const SET_MOBILE_DETECT = '@@react-responsive-redux/SET_MOBILE_DETECT'

export const setMobileDetect = ({
  phone, tablet, mobile, desktop,
} = {}) => ({
  type: SET_MOBILE_DETECT, phone, tablet, mobile, desktop,
})

// TODO - allow users to pass this in - we have to share it with our components
// too though so maybe we need a getter/setter on our entire class?

// default to a desktop size if in doubt
export const defaultSize = breakPoints.tablet + 1

export const initialState = {
  phone: false,
  tablet: false,
  mobile: false,
  desktop: false,
  fakeWidth: defaultSize,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_MOBILE_DETECT: {
    // use initialState as the default values
    const {
      mobile, tablet, phone, desktop,
    } = { ...initialState, ...action }

    let fakeWidth

    if (mobile) {
      if (phone) {
        fakeWidth = breakPoints.phone
      } else if (tablet) {
        fakeWidth = breakPoints.tablet
      } else {
        // TODO - should we ever get here? default to the lowest value i guess
        fakeWidth = breakPoints.phone
      }
    } else if (desktop) {
      fakeWidth = breakPoints.tablet + 1
    } else {
      // nothing set, default to our defaultSize
      fakeWidth = defaultSize
    }

    return {
      ...state, mobile, tablet, phone, desktop, fakeWidth,
    }
  }
  default:
    return state
  }
}
