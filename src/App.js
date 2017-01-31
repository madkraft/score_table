import React, { Component } from 'react'
import { loadEngland } from './fetchService'
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
        <div>
          <ul>
            { this.state.epl.standing.map(team => (
              <li>{team.position} {team.teamName} {team.points}</li>
            )) }
          </ul>
        </div>
      </div>
    )
  }
}

export default App
