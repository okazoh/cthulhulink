import { LOGIN, LOGOUT } from '../actionTypes'

const appInitialState = {
  session: null
}

const sessionReducer = (state = appInitialState , action) => {
  switch (action.type) {
    case LOGIN:
      alert(`login username=${action.username} password=${action.password}`)
      return Object.assign({}, {session: {sessionKey: action.username}})
    case LOGOUT:
      alert('logout')
      return Object.assign({}, {session: null})
    default:
      return state
  }
}

export default sessionReducer
