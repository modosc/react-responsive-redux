import React from 'react'
import { shallow, mount } from 'enzyme'
import { createMockStore } from 'redux-test-utils'
import globalJsdom from 'global-jsdom'
import MediaQuery from 'react-responsive'
import { MediaQueryWrapper, responsiveWrapper, PhoneScreen, TabletScreen,
  MobileScreen, DesktopScreen, PhoneScreenHidden, TabletScreenHidden,
  DesktopScreenHidden, MobileScreenHidden } from '../src/components'

import { breakPoints } from '../src/defaults'

const shallowWithStore = (component, store) => {
  const context = {
    store: createMockStore(store),
  }
  return shallow(component, { context })
}

const mountWithStore = (component, store) => {
  const context = {
    store: createMockStore(store),
  }
  return mount(component, { context })
}

before(() => {
  global.jsdom = globalJsdom()
})

after(() => {
  global.jsdom()
})

describe('components', () => {
  const query = 'min-width: 123'
  const fakeWidth = 123
  const child = <div>foo</div>

  describe('MediaQueryWrapper', () => {
    it('works', () => {
      const component = shallow(<MediaQueryWrapper />)
      expect(component).to.have.type(MediaQuery)
    })
    it('handles MediaQuery props', () => {
      const component = shallow(<MediaQueryWrapper {...{ query }} />)
      expect(component).to.have.prop('query').deep.equal(query)
    })
    it('handles fakeWidth', () => {
      const component = shallow(<MediaQueryWrapper {...{ fakeWidth, query }} />)
      expect(component).to.have.prop('values').deep.equal({ deviceWidth: fakeWidth, width: fakeWidth })
      expect(component).to.have.prop('query').deep.equal(query)
    })
    it('handles dispatch', () => {
      const dispatch = () => {}
      const component = shallow(<MediaQueryWrapper {...{ dispatch }} />)
      expect(component).to.not.have.prop('dispatch')
    })
    it('handles children', () => {
      const component = shallow(<MediaQueryWrapper>{child}</MediaQueryWrapper>)
      expect(component).to.contain(child)
    })
  })
  describe('responsiveWrapper', () => {
    const store = { responsive: { fakeWidth } }
    const Wrapped = responsiveWrapper()

    it('reads fakeWidth from redux', () => {
      const component = shallowWithStore(<Wrapped />, store)
      expect(component).to.have.prop('fakeWidth').deep.equal(fakeWidth)
    })
    it('passes other props along', () => {
      const component = shallowWithStore(<Wrapped {...{ query }} />, store)
      expect(component).to.have.prop('query').deep.equal(query)
    })
  })
  const itBehavesCorrectly = (Component, goodSize, badSize) => {
    it('renders with good size', () => {
      const store = { responsive: { fakeWidth: goodSize } }
      const rendered = mountWithStore(<Component>{child}</Component>, store)
      expect(rendered).to.contain(child)
    })
    it('does not render with bad size', () => {
      const store = { responsive: { fakeWidth: badSize } }
      const rendered = mountWithStore(<Component>{child}</Component>, store)
      expect(rendered).to.not.contain(child)
    })
  }
  describe('PhoneScreen', () => {
    itBehavesCorrectly(PhoneScreen, breakPoints.phone, breakPoints.phone + 1)
  })
  describe('PhoneScreenHidden', () => {
    itBehavesCorrectly(PhoneScreenHidden, breakPoints.phone + 1, breakPoints.phone)
  })
  describe('TabletScreen', () => {
    itBehavesCorrectly(TabletScreen, breakPoints.tablet, breakPoints.tablet + 1)
  })
  describe('TabletScreenHidden', () => {
    itBehavesCorrectly(TabletScreenHidden, breakPoints.tablet + 1, breakPoints.tablet)
  })
  describe('DesktopScreen', () => {
    itBehavesCorrectly(DesktopScreen, breakPoints.tablet + 1, breakPoints.tablet)
  })
  describe('DesktopScreenHidden', () => {
    itBehavesCorrectly(DesktopScreenHidden, breakPoints.tablet, breakPoints.tablet + 1)
  })
  describe('MobileScreen', () => {
    itBehavesCorrectly(MobileScreen, breakPoints.phone, breakPoints.tablet + 1)
  })
  describe('MobileScreenHidden', () => {
    itBehavesCorrectly(MobileScreenHidden, breakPoints.tablet + 1, breakPoints.phone)
  })
})
