import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LOGIN } from '../actionTypes'

class Login extends Component {
  render () {
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
}

var mapStateToProps = (state) => {
  return state
}

var mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch({type: LOGIN,username: username, password: password})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
