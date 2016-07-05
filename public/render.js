/* ----- Requires ----------------------------------------------------------- */
import React            from 'react'
import ReactDOM         from 'react-dom'
import { Provider }     from 'react-redux'
/* ----- Components --------------------------------------------------------- */
import App              from '../components/app'
import SideBar          from '../components/sidebar'
/* ----- Store -------------------------------------------------------------- */
import store            from '../store'
/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <Provider store={ store }>
    <App>
      <SideBar />
    </App>
  </Provider>,
  document.getElementById('container')
)
