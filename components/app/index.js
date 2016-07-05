/* ----- Requires ----------------------------------------------------------- */
import React, { PropTypes } from 'react'
/* ----- Components --------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

const style = {
  marginTop: '40px',
}

const App = ({ children }) =>
  <div style={ style }>
    { children }
  </div>

/* ----- PropTypes ---------------------------------------------------------- */
App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
}
/* -------------------------------------------------------------------------- */
export default App
