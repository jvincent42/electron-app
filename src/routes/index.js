/* ----- Requires ----------------------------------------------------------- */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
/* ----- Components --------------------------------------------------------- */
import App from '../components/App'
import Home from '../screens/Home'
import Links from '../screens/Links'
import Images from '../screens/Images'
/* -------------------------------------------------------------------------- */

const routes =
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route
      path="/links"
      component={ Links } />
    <Route
      path="/images"
      component={ Images } />
  </Route>

export default routes
