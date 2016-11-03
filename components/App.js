import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import Relay from 'react-relay'

import Login from './Login/Login'
import LoginRoute from './Login/LoginRelayRoute'

class App extends Component {

  render() {
    return (
      <div>
        <Relay.RootContainer Component={Login} route={new LoginRoute({guid: this.props.userLogged.guid})} />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
