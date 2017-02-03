import React, { Component } from 'react'
import Layout from './leagueStandings/containers/Layout'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Layout />
      </div>
    )
  }
}

export default App

// <Layout />
// {React.cloneElement(this.props.children, this.props)}