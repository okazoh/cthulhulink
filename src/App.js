import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    if (this.props.SessionReducer.session == null) {
      return (
        <div className='App'>
          <h1>ログイン処理</h1>
          <input
            type='button'
            name='test'
            value='test'
            onClick={e => this.props.login('test', 'pass')} />
        </div>
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
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

var mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      alert('test')
      dispatch({type: 'login',username: username, password: password})
    },
    logout: () => {
      dispatch({type: 'logout'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
