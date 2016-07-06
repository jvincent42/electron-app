/* ----- Requires ----------------------------------------------------------- */
import React, { PropTypes }     from 'react'
import { bindActionCreators }   from 'redux'
import { connect }              from 'react-redux'
import { identity, mapC, lift } from '../../utils'
import * as sideActions         from '../../store/actions/sideActions'
/* -------------------------------------------------------------------------- */

const SideItem = ({ icon, text, location, handleClick }) =>
  <div className={ `side-${icon}` } onClick={ x => handleClick(location) }>
    { text }
  </div>

const SideBar = ({ sideItems, actions, ...props }) => {
  const SideItems = mapC(SideItem, sideItems)
  return <SideItems className="sidebar" handleClick={ actions.handleClick } />
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
  actions: bindActionCreators({
    handleClick: sideActions.navigate
  }, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar)
