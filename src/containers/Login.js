import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LOGIN } from '../actionTypes'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super();
    this.state = { username: '', password: '' };
  }

  render = () => {
    return (
      <div className='Login'>
        <div id="screentitle"><h1>Cthulhu.link</h1></div>
        <input type="text" id="username" name="username" placeholder="ユーザー名" value={this.state.username} onChange={this.handleChange} />
        <input type="password" id="password" name="password" placeholder="パスワード" value={this.state.password} onChange={this.handleChange} />
        <input
          type='button'
          id="login"
          value="ログイン"
          onClick={e => this.props.login(this.state.username, this.state.password)} />
      </div>
    )
  }

  handleChange = (evt) => {
    // eventが発火したname属性名ごとに値を処理
    switch (evt.target.name) {
      case 'username':
        this.state.username = evt.target.value;
        break;
      case 'password':
        this.state.password = evt.target.value;
        break;
    }

    // 状態を更新
    this.setState(this.state);
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
