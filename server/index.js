/* ---------- Requires ------------------------------------------------------ */
import React    from 'react'
import {renderToStaticMarkup} from 'react-dom/server'

import App      from '../components/app'
/* -------------------------------------------------------------------------- */

const page = renderToStaticMarkup(
    <App />
)

console.log(page);
