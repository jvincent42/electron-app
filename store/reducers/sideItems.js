/* ----- Requires ----------------------------------------------------------- */
import actions from '../constants'
/* -------------------------------------------------------------------------- */

const initialState = [{
  text: "plop",
  icon: "add",
  action: "add"
}]

const sideItems = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD: return [ ...state, ...initialState]
    case actions.SUB: return state
    default:  return state
  }
}

export default sideItems
