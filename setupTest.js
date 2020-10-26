import Enzyme from 'enzyme'
import 'whatwg-fetch'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })