import React from 'react'
import './Fixtures.css'

const Fixtures = ({fixtures}) => (
  <div className='fixtures'>
    <h5>Latest results</h5>
    { fixtures.map((fixture, index) => (
      <div key={index} className='mdl-grid'>
        <div className='fixtures__home-team mdl-cell mdl-cell--5-col'>
          { fixture.homeTeamName }
        </div>
        <div className='fixtures__home-score mdl-cell mdl-cell--1-col'>
          {
            fixture.result.goalsHomeTeam === null
            ? '-'
            : fixture.result.goalsHomeTeam
          }
        </div>
        <div className='mdl-cell mdl-cell--1-col'>
          {
            fixture.result.goalsAwayTeam === null
            ? '-'
            : fixture.result.goalsAwayTeam
          }
        </div>
        <div className='mdl-cell mdl-cell--5-col'>
          { fixture.awayTeamName }
        </div>
      </div>
    )) }
  </div>
)

export default Fixtures

Fixtures.propTypes = {
  fixtures: React.PropTypes.array.isRequired
}

// { fixture.matchday } 
//         { fixture.date } 
//         { fixture.status }