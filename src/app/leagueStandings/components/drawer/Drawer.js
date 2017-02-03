import React from 'react'
import {Link} from 'react-router'

const Drawer = ({league}) => (
  <a href='#' className='mdl-navigation__link'>
    {league.name}
  </a>
)

export default Drawer

// Drawer.propTypes = {
//   fixtures: React.PropTypes.array
// }
