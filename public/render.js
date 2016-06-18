/* ----- Requires ----------------------------------------------------------- */
import React            from 'react'
import ReactDOM         from 'react-dom'
/* ----- Components --------------------------------------------------------- */
import App              from '../components/app'
import SideBar          from '../components/sidebar'
/* ----- Store -------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

const onClick = value => () => console.log(value)
const value = 'Yolo'

ReactDOM.render(
  <App>
    <SideBar
      handleClick={ onClick }
      value={ value }
    />
  </App>,
  document.getElementById('container')
)
