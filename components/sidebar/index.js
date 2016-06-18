/* ----- Requires ----------------------------------------------------------- */
import React, { PropTypes } from 'react'
/* -------------------------------------------------------------------------- */

const SideBar = ({ handleClick, value }) =>
  <div className="sidebar">
    <button onClick={ handleClick(value) }>Click Me !</button>
    <div>{ value }</div>
  </div>

/* ----- PropTypes ---------------------------------------------------------- */
SideBar.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
}
/* -------------------------------------------------------------------------- */

export default SideBar
