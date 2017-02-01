import React from 'react'
import './Standings.css'

const Standings = ({standing}) => (
  <table className='standings mdl-data-table mdl-js-data-table mdl-shadow--2dp'>
    <thead>
      <tr>
        <th>
          #
        </th>
        <th className='mdl-data-table__cell--non-numeric'>
          Team
        </th>
        <th>
          Pl
        </th>
        <th className='mdl-layout--large-screen-only'>
          W
        </th>
        <th className='mdl-layout--large-screen-only'>
          D
        </th>
        <th className='mdl-layout--large-screen-only'>
          L
        </th>
        <th className='mdl-layout--large-screen-only'>
          F
        </th>
        <th className='mdl-layout--large-screen-only'>
          A
        </th>
        <th>
          GD
        </th>
        <th className='mdl-data-table__header--sorted-descending'>
          Pts
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
          <td className='mdl-layout--large-screen-only'>{team.wins}</td>
          <td className='mdl-layout--large-screen-only'>{team.draws}</td>
          <td className='mdl-layout--large-screen-only'>{team.losses}</td>
          <td className='mdl-layout--large-screen-only'>{team.goals}</td>
          <td className='mdl-layout--large-screen-only'>{team.goalsAgainst}</td>
          <td>{team.goalDifference}</td>
          <td>{team.points}</td>
        </tr>
      )) }
    </tbody>
  </table>
)

export default Standings
