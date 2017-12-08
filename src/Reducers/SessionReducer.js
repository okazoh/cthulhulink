const appInitialState = {
  session: null
}

export const SessionReducer = (state = appInitialState , action) => {
  switch (action.type) {
    case 'login':
      alert(`login username=${action.username} password=${action.password}`)
      return Object.assign({}, {session: {username: action.username,password: action.password}})
    case 'logout':
      alert('logout')
      return Object.assign({}, {session: null})
    default:
      return state
  }
}
