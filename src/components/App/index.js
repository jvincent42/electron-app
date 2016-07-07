/* ----- Requires ----------------------------------------------------------- */
import React, { PropTypes } from 'react'
/* ----- Components --------------------------------------------------------- */
import SideBar from '../SideBar'
/* -------------------------------------------------------------------------- */

const App = ({ children }) =>
  <div className="app group">
    <SideBar />
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
