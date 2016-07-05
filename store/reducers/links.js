/* ----- Requires ----------------------------------------------------------- */
import actions from '../constants'
/* -------------------------------------------------------------------------- */

const links = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_LINK: return [...state, action.link]
    default:  return state
  }
}

export default links
