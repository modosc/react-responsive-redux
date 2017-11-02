import { mobileParser } from '../src/parser'

describe('mobileParser', () => {
  const req = ua => ({ headers: { 'user-agent': ua } })
  context('with a phone', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A5297c Safari/602.1'
    it('works', () => {
      expect(mobileParser(req(ua)))
        .to.deep.equal({
          phone: true, tablet: false, mobile: true, desktop: false,
        })
    })
  })
  context('with a tablet', () => {
    const ua = 'Mozilla/5.0 (iPad; CPU OS 10_2 like Mac OS X) AppleWebKit/602.3.12 (KHTML, like Gecko) Version/10.0 Mobile/14C92 Safari/602.1'
    it('works', () => {
      expect(mobileParser(req(ua)))
        .to.deep.equal({
          phone: false, tablet: true, mobile: true, desktop: false,
        })
    })
  })
  context('with a desktop', () => {
    const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    it('works', () => {
      expect(mobileParser(req(ua)))
        .to.deep.equal({
          phone: false, tablet: false, mobile: false, desktop: true,
        })
    })
  })
  context('with an unknown', () => {
    const ua = 'sadfasdfasdfas'
    it('works', () => {
      expect(mobileParser(req(ua)))
        .to.deep.equal({
          phone: false, tablet: false, mobile: false, desktop: true,
        })
    })
  })
})
