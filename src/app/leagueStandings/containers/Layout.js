import React, { Component } from 'react'
import { loadEngland } from '../../services/fetchService'
import Drawer from '../components/drawer/Drawer'
import Standings from '../components/standings/Standings'
import Fixtures from '../components/fixtures/Fixtures'
import Header from '../components/header/Header'

class Layout extends Component {
  state = {
    leagueTable: {
      leagueCaption: '',
      standing: []
    },
    fixtures: [],
    loading: true
  }

  componentDidMount () {
    loadEngland('leagueTable')
      .then(data => this.setState({
        leagueTable: data,
        loading: false
      }))

    loadEngland('fixtures')
      .then(data => this.setState({fixtures: this.lastPlayed(data)}))
      // .then(data => this.setState({fixtures: data.fixtures}))
  }

  lastPlayed ({fixtures}) {
    return fixtures.filter(fixture => (
      fixture.matchday === this.state.leagueTable.matchday
    ))
  }

  render () {
    return (
      <div className='layout'>
        <div className="demo-layout-waterfall mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header mdl-layout--fixed-tabs">
          <Header caption={this.state.leagueTable.leagueCaption} />
          <Drawer />
          <main className="mdl-layout__content">
            <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
              <div className="page-content">
                <Standings 
                  standing={ this.state.leagueTable.standing }
                  loading={ this.state.loading }
                />
              </div>
            </section>
            <section className="mdl-layout__tab-panel" id="fixed-tab-2">
              <div className="page-content">
                <Fixtures fixtures={this.state.fixtures} />
              </div>
            </section>
          </main>
        </div>
      </div>
    )
  }
}

export default Layout
