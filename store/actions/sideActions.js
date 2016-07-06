/* ----- Requires ----------------------------------------------------------- */
import actions from '../constants'
import { push } from 'react-router-redux'
/* -------------------------------------------------------------------------- */

const actionAdd = () => ({ type: actions.ADD })
export const add = () => (dispatch, getState) => {
  dispatch(actionAdd())
  console.log(getState())
}

const actionSub = () => ({ type: actions.SUB })
export const sub = () => (dispatch, getState) => {
  dispatch(actionSub())
  console.log(getState())
}

export const navigate = location => (dispatch, getState) => {
  console.log(location);
  dispatch(push( `/${location}` ))
}
