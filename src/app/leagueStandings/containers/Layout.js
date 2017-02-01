import React, { Component } from 'react'
import { loadEngland } from '../../services/fetchService'
import Drawer from '../components/drawer/Drawer'
import Standings from '../components/standings/Standings'
import Fixtures from '../components/fixtures/Fixtures'
import Header from '../components/header/Header'

class Layout extends Component {
  state = {
    epl: {
      leagueCaption: '',
      standing: []
    }
  }

  componentDidMount () {
    loadEngland()
      .then(data => this.setState({epl: data}))
  }

  render () {
    return (
      <div className='layout'>
        <div className="demo-layout-waterfall mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header mdl-layout--fixed-tabs">
          <Header caption={this.state.epl.leagueCaption} />
          <Drawer />
          <main className="mdl-layout__content">
            <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
              <div className="page-content">
                <Standings standing={this.state.epl.standing} />
              </div>
            </section>
            <section className="mdl-layout__tab-panel" id="fixed-tab-2">
              <div className="page-content">
                <Fixtures />
              </div>
            </section>
          </main>
        </div>
      </div>
    )
  }
}

export default Layout
