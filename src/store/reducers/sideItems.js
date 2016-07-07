/* ----- Requires ----------------------------------------------------------- */
import actions from '../constants'
import { filter } from 'ramda'
/* -------------------------------------------------------------------------- */

const initialState = [{
  text: "Links",
  icon: "link",
  location: "links"
},{
  text: "Images",
  icon: "picture",
  location: "images"
}]

const sideItems = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return [ ...state, action.item ]
    case actions.REMOVE_ITEM:
      return filter(x => x.text === action.item.text, state)
    default:  return state
  }
}

export default sideItems
