import React, { Component } from 'react'
import { loadEngland } from './fetchService'

import '../node_modules/material-design-lite/material.min.css'
import '../node_modules/material-design-lite/material.min.js'
import './App.css'


class App extends Component {
  state = {
    epl: {
      leagueCaption: 'Hello',
      standing: []
    }
  }

  componentDidMount () {
    loadEngland()
      .then(data => this.setState({epl: data}))
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>{ this.state.epl.leagueCaption }</h2>
          <p>Matchday: { this.state.epl.matchday }</p>
        </div>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th>Position</th>
              <th className="mdl-data-table__cell--non-numeric">Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            { this.state.epl.standing.map(team => (
              <tr>
                <td>{team.position}</td>
                <td className="mdl-data-table__cell--non-numeric">{team.teamName}</td>
                <td>{team.points}</td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App