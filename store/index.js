/* ----- Requires ----------------------------------------------------------- */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk   from 'redux-thunk'
import sideItemsReducer from './reducers/sideItems'
import linksReducer from './reducers/links'
/* -------------------------------------------------------------------------- */

const middlewares = applyMiddleware(thunk)

const rootReducer = combineReducers({
  sideItems: sideItemsReducer,
  links: linksReducer,
})

const store = createStore(rootReducer, middlewares)

export default store
