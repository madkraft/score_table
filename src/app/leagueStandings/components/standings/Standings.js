import React from 'react'
import './Standings.css'

const Standings = ({standing}) => (
  <table className='standings mdl-data-table mdl-js-data-table mdl-shadow--2dp'>
    <thead>
      <tr>
        <th>
          Position
        </th>
        <th className='mdl-data-table__cell--non-numeric'>
          Team
        </th>
        <th>
          PG
        </th>
        <th>
          Wins
        </th>
        <th>
          Draws
        </th>
        <th>
          Losses
        </th>
        <th>
          Goals
        </th>
        <th>
          GA
        </th>
        <th>
          GD
        </th>
        <th className='mdl-data-table__header--sorted-descending'>
          Points
        </th>
      </tr>
    </thead>
    <tbody>
      { standing.map(team => (
        <tr>
          <td>{team.position}</td>
          <td className='mdl-data-table__cell--non-numeric'>
            <a className='mdl-navigation__link' href=''>{team.teamName}</a>
          </td>
          <td>{team.playedGames}</td>
          <td>{team.wins}</td>
          <td>{team.draws}</td>
          <td>{team.losses}</td>
          <td>{team.goals}</td>
          <td>{team.goalsAgainst}</td>
          <td>{team.goalDifference}</td>
          <td>{team.points}</td>
        </tr>
      )) }
    </tbody>
  </table>
)

export default Standings
