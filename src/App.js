import React, { Component } from 'react'
import { loadEngland } from './fetchService'

import './App.scss'


class App extends Component {
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
      <div className='App'>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Title</span>
            </div>
            <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
              <a href="#fixed-tab-1" className="mdl-layout__tab is-active">Tab 1</a>
              <a href="#fixed-tab-2" className="mdl-layout__tab">Tab 2</a>
              <a href="#fixed-tab-3" className="mdl-layout__tab">Tab 3</a>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Title</span>
          </div>
          <main className="mdl-layout__content">
            <section className="mdl-layout__tab-panel is-active" id="fixed-tab-1">
              <div className="page-content">hey</div>
            </section>
            <section className="mdl-layout__tab-panel" id="fixed-tab-2">
              <div className="page-content">jello</div>
            </section>
            <section className="mdl-layout__tab-panel" id="fixed-tab-3">
              <div className="page-content">wolrd</div>
            </section>
          </main>
        </div>
      </div>
    )
  }
}

export default App


// <div className='App-header'>
//           <h2>{ this.state.epl.leagueCaption }</h2>
//           <p>Matchday: { this.state.epl.matchday }</p>
//         </div>
// <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
//   <thead>
//     <tr>
//       <th>Position</th>
//       <th className="mdl-data-table__cell--non-numeric">Team</th>
//       <th>Points</th>
//     </tr>
//   </thead>
//   <tbody>
//     { this.state.epl.standing.map(team => (
//       <tr>
//         <td>{team.position}</td>
//         <td className="mdl-data-table__cell--non-numeric">{team.teamName}</td>
//         <td>{team.points}</td>
//       </tr>
//     )) }
//   </tbody>
// </table>