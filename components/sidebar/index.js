/* ----- Requires ----------------------------------------------------------- */
import React, { PropTypes }     from 'react'
import { bindActionCreators }   from 'redux'
import { connect }              from 'react-redux'
import { identity, mapC, lift } from '../../utils'
import * as sideActions         from '../../store/actions/sideActions'
/* -------------------------------------------------------------------------- */

const SideItem = ({ icon, text, click, action }) =>
  <div className={ `side-${icon}` } onClick={ click(action) }>
    { text }
  </div>

const SideBar = ({ sideItems, actions }) => {
  const SideItems = mapC(SideItem, sideItems)
  return <SideItems className="sidebar" click={ actions.click } />
}

/* ----- PropTypes ---------------------------------------------------------- */
SideBar.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
}

/* ----- Connect  ----------------------------------------------------------- */
const mapStateToProps = state => ({
  sideItems: state.sideItems
})

const mapDispatchToProps = dispatch => ({
  actions: {
    click: sideActions.click(dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar)
