// eslint-disable-next-line
import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
// eslint-disable-next-line
import thunk from 'redux-thunk'
import counterReducer from 'pages/redux/reduxReducers'

const reducer = combineReducers({
  counter: counterReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const dispatch = store.dispatch
export const getState = store.getState

export default store
