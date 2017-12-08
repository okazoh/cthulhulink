import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import Login from './containers/Login'
import { LOGOUT } from './actionTypes'

class App extends Component {
  render () {
    if (this.props.sessionReducer.session == null) {
      return (
        <Login />
      )
    }
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          type='button'
          name='logout'
          value='logout'
          onClick={e => this.props.logout()} />
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

var mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch({type: LOGOUT})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
