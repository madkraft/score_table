import React from 'react'
import Standings from '../standings/Standings'
import Fixtures from '../fixtures/Fixtures'

const Results = ({state}) => (
  <main className='mdl-layout__content'>
    <section className='mdl-layout__tab-panel is-active' id='fixed-tab-1'>
      <div className='page-content'>
        <Standings
          standing={state.leagueTable.standing}
          loading={state.loading}
        />
      </div>
    </section>
    <section className='mdl-layout__tab-panel' id='fixed-tab-2'>
      <div className='page-content'>
        <Fixtures fixtures={state.fixtures} />
      </div>
    </section>
  </main>
)

export default Results

Results.propTypes = {
  state: React.PropTypes.object.isRequired
}
