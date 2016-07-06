/* ----- Requires ----------------------------------------------------------- */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import sideItemsReducer from './reducers/sideItems'
import linksReducer from './reducers/links'
import { hashHistory } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'
/* -------------------------------------------------------------------------- */

const history = routerMiddleware(hashHistory)
const middlewares = [thunk, history]

const rootReducer = combineReducers({
  sideItems: sideItemsReducer,
  links: linksReducer,
  routing: routerReducer
})

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
