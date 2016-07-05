/* ----- Requires ----------------------------------------------------------- */
import actions from '../constants'
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

// const actionClick = () => ({ type: actions.ADD })
// export const click = (dispatch) => action => () => {
//   dispatch((dispatch, getState) => {
//     dispatch(actionClick())
//     console.log(getState(), action)
//   })
// }
export const click = (dispatch) => action => () => {
  dispatch({
    type: actions.ADD,
    action: action
  })
}
