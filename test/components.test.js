import React from 'react'
import { shallow, mount } from 'enzyme'
import { createMockStore } from 'redux-test-utils'
import MediaQuery from 'react-responsive'
import {
  MediaQueryWrapper, responsiveWrapper, PhoneScreen, TabletScreen,
  MobileScreen, DesktopScreen, PhoneScreenHidden, TabletScreenHidden,
  DesktopScreenHidden, MobileScreenHidden, XsScreen, XsScreenHidden, SmScreen,
  SmScreenHidden, MdScreen, MdScreenHidden, LgScreen, LgScreenHidden,
} from '../src'

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

describe('components', () => {
  const query = 'min-width: 123'
  const fakeWidth = 123
  const child = <div>foo</div>

  describe('MediaQueryWrapper', () => {
    it('works', () => {
      const component = shallow(<MediaQueryWrapper />)
      expect(component).to.have.type(MediaQuery)
    })
    it('defaults to div', () => {
      const component = shallow(<MediaQueryWrapper />)
      expect(component).to.have.prop('component').deep.equal('div')
    })
    it('supports other components', () => {
      const component = shallow(<MediaQueryWrapper component="p" />)
      expect(component).to.have.prop('component').deep.equal('p')
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
  describe('XsScreen', () => {
    itBehavesCorrectly(XsScreen, breakPoints.xs, breakPoints.sm)
  })
  describe('XsScreenHidden', () => {
    itBehavesCorrectly(XsScreenHidden, breakPoints.sm, breakPoints.xs)
  })
  describe('SmScreen', () => {
    itBehavesCorrectly(SmScreen, breakPoints.sm, breakPoints.md)
  })
  describe('SmScreenHidden', () => {
    itBehavesCorrectly(SmScreenHidden, breakPoints.md, breakPoints.sm)
  })
  describe('MdScreen', () => {
    itBehavesCorrectly(MdScreen, breakPoints.md, breakPoints.lg)
  })
  describe('MdScreenHidden', () => {
    itBehavesCorrectly(MdScreenHidden, breakPoints.lg, breakPoints.md)
  })
  describe('LgScreen', () => {
    itBehavesCorrectly(LgScreen, breakPoints.lg, breakPoints.md)
  })
  describe('LgScreenHidden', () => {
    itBehavesCorrectly(LgScreenHidden, breakPoints.md, breakPoints.lg)
  })
  describe('PhoneScreen', () => {
    itBehavesCorrectly(PhoneScreen, breakPoints.xs, breakPoints.sm)
  })
  describe('PhoneScreenHidden', () => {
    itBehavesCorrectly(PhoneScreenHidden, breakPoints.sm, breakPoints.xs)
  })
  describe('TabletScreen', () => {
    itBehavesCorrectly(TabletScreen, breakPoints.sm, breakPoints.md)
  })
  describe('TabletScreenHidden', () => {
    itBehavesCorrectly(TabletScreenHidden, breakPoints.md, breakPoints.sm)
  })
  describe('DesktopScreen', () => {
    itBehavesCorrectly(DesktopScreen, breakPoints.md, breakPoints.sm)
  })
  describe('DesktopScreenHidden', () => {
    itBehavesCorrectly(DesktopScreenHidden, breakPoints.sm, breakPoints.md)
  })
  describe('MobileScreen', () => {
    itBehavesCorrectly(MobileScreen, breakPoints.xs, breakPoints.md)
  })
  describe('MobileScreenHidden', () => {
    itBehavesCorrectly(MobileScreenHidden, breakPoints.md, breakPoints.sm)
  })
})
