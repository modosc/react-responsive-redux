'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.reducer = exports.setMobileDetect = undefined

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key] } } } return target }

const _defaults = require('./defaults')

const SET_MOBILE_DETECT = '@@react-responsive-redux/SET_MOBILE_DETECT'

const setMobileDetect = exports.setMobileDetect = function setMobileDetect() {
  let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    phone = _ref.phone,
    tablet = _ref.tablet,
    mobile = _ref.mobile,
    desktop = _ref.desktop

  return { type: SET_MOBILE_DETECT, phone, tablet, mobile, desktop }
}

// TODO - allow users to pass this in - we have to share it with our components
// too though so maybe we need a getter/setter on our entire class?

// default to a desktop size if in doubt
const defaultSize = _defaults.breakPoints.tablet + 1

const initialState = {
  phone: false,
  tablet: false,
  mobile: false,
  fakeWidth: defaultSize,
}

const reducer = exports.reducer = function reducer() {
  const state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState
  const action = arguments[1]

  switch (action.type) {
  case SET_MOBILE_DETECT:
  {
    let mobile = action.mobile,
      tablet = action.tablet,
      phone = action.phone,
      desktop = action.desktop

    let fakeWidth = void 0

    if (mobile) {
      if (phone) {
        fakeWidth = _defaults.breakPoints.phone
      } else if (tablet) {
        fakeWidth = _defaults.breakPoints.tablet
      } else {
        // TODO - should we ever get here? default to the lowest value i guess
        fakeWidth = _defaults.breakPoints.phone
      }
    } else {
      fakeWidth = _defaults.breakPoints.tablet + 1
    }
    return _extends({}, state, { mobile, tablet, phone, desktop, fakeWidth })
  }
  default:
    return state
  }
}
// # sourceMappingURL=redux.js.map
