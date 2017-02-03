import React, { Component } from 'react'
import { loadData } from '../../services/fetchService'
import { nextGames } from '../../lib/leagueStandingsHelpers'

import Drawer from '../components/drawer/Drawer'
import Header from '../components/header/Header'
// import Results from '../components/results/Results'
import Standings from '../components/standings/Standings'
import Fixtures from '../components/fixtures/Fixtures'

class Layout extends Component {
  constructor () {
    super()

    this.state = {
      leagueTable: {
        leagueCaption: '',
        standing: []
      },
      leagueId: 430,
      fixtures: [],
      loading: true,
      leagues: [
        {id: 426, name: 'England'},
        {id: 436, name: 'Spain'},
        {id: 438, name: 'Italy'},
        {id: 430, name: 'Germany'},
      ]
    }
  }

  componentDidMount () {
    loadData(this.state.leagues[0].id, 'leagueTable')
      .then(data => this.setState({
        leagueTable: data,
        loading: false
      }))

    loadData(this.state.leagues[0].id, 'fixtures')
      .then(data => {
        this.setState({
          fixtures: nextGames(data.fixtures, this.state.leagueTable.matchday)
        })
      })
      // .then(data => this.setState({fixtures: data.fixtures}))
  }

  onDrawerClick (leagueId) {
    this.setState({
      loading: true
    })

    loadData(leagueId, 'leagueTable')
      .then(data => this.setState({
        leagueTable: data,
        loading: false
      }))

    loadData(leagueId, 'fixtures')
      .then(data => {
        this.setState({
          fixtures: nextGames(data.fixtures, this.state.leagueTable.matchday)
        })
      })
  }

  render () {
    return (
      <div className='demo-layout-waterfall mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header mdl-layout--fixed-tabs'>
        <Header caption={this.state.leagueTable.leagueCaption} />
        <div className='mdl-layout__drawer'>
          <span className='mdl-layout-title'>Leagues</span>
          <nav className='mdl-navigation'>
            {this.state.leagues.map((league, index) => (
              <a href='#'
                key={index}
                className='mdl-navigation__link'
                onClick={this.onDrawerClick.bind(this, league.id)}>
                {league.name}
              </a>
            ))}
          </nav>
        </div>
        <main className='mdl-layout__content'>
          <section className='mdl-layout__tab-panel is-active' id='fixed-tab-1'>
            <div className='page-content'>
              <Standings
                standing={this.state.leagueTable.standing}
                loading={this.state.loading}
              />
            </div>
          </section>
          <section className='mdl-layout__tab-panel' id='fixed-tab-2'>
            <div className='page-content'>
              <Fixtures fixtures={this.state.fixtures} />
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Layout
