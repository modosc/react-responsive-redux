import { combineReducers } from 'redux'
import { reducer as responsiveReducer } from 'react-responsive-redux'

import counter from './counter'

const rootReducer = combineReducers({
  counter,
  responsive: responsiveReducer,
})

export default rootReducer
