import React from 'react'
import { bindActionCreators } from 'redux'
import { MobileScreen, DesktopScreen } from 'react-responsive-redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import Counter from '../components/Counter'
import * as CounterActions from '../actions'

const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch)
const App = (props = {}) =>
  <div>
    <div>
      <MobileScreen>
        <div>You are a mobile device</div>
      </MobileScreen>
      <DesktopScreen>
        <div>You are a desktop</div>
      </DesktopScreen>
    </div>
    <Counter {...props} />
  </div>

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App))
