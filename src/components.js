// see also components/ScreenSize for another way to consume this data
import React from 'react'
import MediaQuery from 'react-responsive'
import omit from 'lodash.omit'
import { connect } from 'react-redux'
import { breakPoints } from './defaults'

// ugly ugly ugly ugly but how else can we get this? it's not exported publicly
import { features } from './mediaQuery'

export const responsiveWrapper = (query) => connect(
  state => ({ fakeWidth: state.responsive.fakeWidth }),
)((props = {}) => {
  // eslint-disable-next-line no-unused-vars
  const { dispatch, fakeWidth, ..._other } = props
  // we're going to omit every prop that react-responsive responds to so
  // our caller doesn't accidentally overwrite stuff
  const other = omit(_other, Object.keys(features))
  const values = { deviceWidth: fakeWidth, width: fakeWidth }
  return (
    <MediaQuery {...{query, values}} {...other}>
      {props.children}
    </MediaQuery>
  )
})

export const PhoneScreen = responsiveWrapper(`(max-width: ${breakPoints.phone}px)`)
export const TabletScreen = responsiveWrapper(`(min-width: ${breakPoints.phone + 1}px) and (max-width: ${breakPoints.tablet}px)`)
export const DesktopScreen = responsiveWrapper(`(min-width: ${breakPoints.tablet + 1}px)`)
export const MobileScreen =  responsiveWrapper(`(max-width: ${breakPoints.tablet}px)`)

export const PhoneScreenHidden = responsiveWrapper(`(min-width: ${breakPoints.phone + 1}px)`)
export const TabletScreenHidden = responsiveWrapper(`(max-width: ${breakPoints.phone}px) or (min-width: ${breakPoints.tablet + 1}px)`)
export const DesktopScreenHidden = responsiveWrapper(`(max-width: ${breakPoints.tablet}px)`)
export const MobileScreenHidden = responsiveWrapper(`(min-width: ${breakPoints.tablet + 1}px)`)
