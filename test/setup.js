import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

global.expect = chai.expect

chai.use(chaiEnzyme())
