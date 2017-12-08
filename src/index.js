import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const appInitialState = {
  session: null
}

const SessionReducer = (state = appInitialState , action) => {
  switch (action.type) {
    case 'login':
      alert('login')
      return Object.assign({}, {session: {username: action.username,password: action.password}})
    case 'logout':
      return Object.assign({}, {session: null})
    default:
      return state
  }
}
const RootReducer = combineReducers({SessionReducer})
const store = createStore(RootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
