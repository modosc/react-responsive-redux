// see also components/ScreenSize for another way to consume this data
import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { connect } from 'react-redux'
import { breakPoints } from './defaults'

export const MediaQueryWrapper = (props = {}) => {
  // eslint-disable-next-line no-unused-vars
  const {
    dispatch, fakeWidth, children, ...other
  } = props
  const values = { deviceWidth: fakeWidth, width: fakeWidth }
  return (
    <MediaQuery {...other} {...{ values }} >
      {children}
    </MediaQuery>
  )
}

MediaQueryWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  dispatch: PropTypes.func.isRequired,
  fakeWidth: PropTypes.number.isRequired,
}

MediaQueryWrapper.defaultProps = {
  children: null,
}

export const responsiveWrapper = (props = {}) =>
  connect(state => ({ fakeWidth: state.responsive.fakeWidth, ...props }))(MediaQueryWrapper)

export const PhoneScreen = responsiveWrapper({ maxWidth: breakPoints.phone })
export const TabletScreen = responsiveWrapper({ query: `(min-width: ${breakPoints.phone + 1}px) and (max-width: ${breakPoints.tablet}px)` })
export const DesktopScreen = responsiveWrapper({ minWidth: breakPoints.tablet + 1 })
export const MobileScreen = responsiveWrapper({ maxWidth: breakPoints.tablet })

export const PhoneScreenHidden = responsiveWrapper({ minWidth: breakPoints.phone + 1 })
export const TabletScreenHidden = responsiveWrapper({ query: `(max-width: ${breakPoints.phone}px), (min-width: ${breakPoints.tablet + 1}px)` })
export const DesktopScreenHidden = responsiveWrapper({ maxWidth: breakPoints.tablet })
export const MobileScreenHidden = responsiveWrapper({ minWidth: breakPoints.tablet + 1 })
