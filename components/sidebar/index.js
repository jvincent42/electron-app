/* ----- Requires ----------------------------------------------------------- */
import React,{Component} from 'react'
/* -------------------------------------------------------------------------- */

const SideBar = ({ handleClick, handleChange, value }) =>
    <div className='sidebar'>
        <button onClick={ handleClick }>Click Me !</button>
        <input type='text' onChange={ handleChange } />
        { value() }
    </div>

export default SideBar
