import React from 'react'

const Header = ({caption}) => (
  <header className='mdl-layout__header mdl-layout__header--waterfall'>
    <div className='mdl-layout__header-row'>
      <span className='mdl-layout-title'>
        { caption }
      </span>
    </div>
    <div className='mdl-layout__tab-bar mdl-js-ripple-effect'>
      <a href='#fixed-tab-1' className='mdl-layout__tab is-active'>
        Standings
      </a>
      <a href='#fixed-tab-2' className='mdl-layout__tab'>
        Fixtures
      </a>
    </div>
  </header>
)

export default Header

Header.propTypes = {
  caption: React.PropTypes.string.isRequired
}
