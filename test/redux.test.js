import { SET_MOBILE_DETECT, setMobileDetect, reducer, initialState, defaultSize } from '../src/redux'
import { breakPoints } from '../src/defaults'

describe('redux', () => {
  describe('actions', () => {
    it('should create an action to set returnTo', () => {
      const type = SET_MOBILE_DETECT
      const md = {
        mobile: true, phone: true, tablet: false, desktop: false,
      }
      const expectedAction = { type, ...md }
      expect(setMobileDetect(md))
        .to.deep.equal(expectedAction)
    })
  })
  describe('reducer', () => {
    describe(`${SET_MOBILE_DETECT}`, () => {
      const type = SET_MOBILE_DETECT
      it('should work with phone', () => {
        const md = {
          mobile: true, phone: true, tablet: false, desktop: false,
        }
        const expected = { ...initialState, ...md, fakeWidth: breakPoints.phone }
        expect(reducer(undefined, { type, ...md }))
          .to.deep.equal(expected)
      })
      it('should work with mobile but no phone or tablet', () => {
        const md = {
          mobile: true, phone: false, tablet: false, desktop: false,
        }
        const expected = { ...initialState, ...md, fakeWidth: breakPoints.phone }
        expect(reducer(undefined, { type, ...md }))
          .to.deep.equal(expected)
      })
      it('should work with tablet', () => {
        const md = {
          mobile: true, phone: false, tablet: true, desktop: false,
        }
        const expected = { ...initialState, ...md, fakeWidth: breakPoints.tablet }
        expect(reducer(undefined, { type, ...md }))
          .to.deep.equal(expected)
      })
      it('should work with desktop', () => {
        const md = {
          mobile: false, phone: false, tablet: false, desktop: true,
        }
        const expected = { ...initialState, ...md, fakeWidth: breakPoints.tablet + 1 }
        expect(reducer(undefined, { type, ...md }))
          .to.deep.equal(expected)
      })
      it('should work with nothing set', () => {
        const expected = { ...initialState, fakeWidth: defaultSize }
        expect(reducer(undefined, { type }))
          .to.deep.equal(expected)
      })
      it('should work with nothing', () => {
        const expected = { ...initialState, fakeWidth: defaultSize }
        expect(reducer(undefined, { type }))
          .to.deep.equal(expected)
      })
    })
  })
})
