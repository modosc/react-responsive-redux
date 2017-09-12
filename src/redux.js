import { breakPoints as defaultBreakPoints } from './defaults'
import { get } from 'lodash'

const SET_MOBILE_DETECT = '@@react-responsive-redux/SET_MOBILE_DETECT'

export const setMobileDetect = ({ phone, tablet, mobile, desktop } = {}) => ({ type: SET_MOBILE_DETECT, phone, tablet, mobile, desktop })

export const buildReducer = (options = {}) => {
  // ugh, babel is passing in undefined as an option here so we can't do destructuring in
  // the function declaration
  const breakPoints = get(options, 'breakPoints', defaultBreakPoints)
  const defaultSize = get(options, 'defaultSize', defaultBreakPoints.tablet + 1)

  const initialState = {
    phone: false,
    tablet: false,
    mobile: false,
    fakeWidth: defaultSize,
  }

  return (state = initialState, action) => {
    switch (action.type) {
      case SET_MOBILE_DETECT: {
        const { mobile, tablet, phone, desktop } = action

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
