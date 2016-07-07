/* ----- Requires ----------------------------------------------------------- */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
/* ----- Components --------------------------------------------------------- */
/* ----- Store -------------------------------------------------------------- */
import store from './src/store'
import routes from './src/routes'
/* -------------------------------------------------------------------------- */

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>,
  document.getElementById('container')
)
