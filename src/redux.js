import { breakPoints } from './defaults'

const SET_MOBILE_DETECT = '@@react-responsive-redux/SET_MOBILE_DETECT'

export const setMobileDetect = ({ phone, tablet, mobile, desktop } = {}) => ({ type: SET_MOBILE_DETECT, phone, tablet, mobile, desktop })

export const buildReducer = ({ sizes = defaultSizes, defaultSize = sizes.desktop }) => {
  const initialState = {
    phone: false,
    tablet: false,
    mobile: false,
    fakeWidth: defaultSize,
  }

  return (state = initialState, action) => {
    switch (action.type) {
      case actions.SET_MOBILE_DETECT: {
        const { mobile, tablet, phone, desktop } = actions

        let fakeWidth
        if (mobile) {
          if (phone) {
            fakeWidth = breakPoints.phone
          } else if (tablet) {
            fakeWidth =  breakPoints.tablet
          } else {
            // TODO - should we ever get here? default to the lowest value i guess
            fakeWidth = breakPoints.phone
          }
        } else {
          fakeWidth = breakPoints.tablet + 1
        }
        return { ...state, mobile, tablet, phone, desktop, fakeWidth }
      }
      default:
        return state
    }
  }
}
