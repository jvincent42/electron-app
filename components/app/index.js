/* ----- Requires ----------------------------------------------------------- */
import React,{ Component } from 'react'
import { stream, combine } from 'flyd'
import { h }               from 'react-flyd'
/* ----- Components --------------------------------------------------------- */
import SideBar             from '../sidebar'
/* -------------------------------------------------------------------------- */

/* ----- Store -------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

const _style = {
    marginTop: "40px"
}
const App = () => {

    const input = stream()
    const value = input.map( (e) => e.target.value )

    const click = stream()
    const clicky = click.map( (e) => value() )

    return (
        <div style={ _style }>
            <SideBar
                handleClick={ click }
                handleChange={ input }
                value={ clicky }
            />

        { clicky() }
            Hello World
        </div>
    )

}
/* -------------------------------------------------------------------------- */
export default App
