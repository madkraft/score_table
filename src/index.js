import React from 'react'
import {render} from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import '../node_modules/material-design-lite/material.min.css'
import '../node_modules/material-design-lite/material.min.js'
import './index.css'

import App from './app/App'
// import Layout from './app/leagueStandings/containers/Layout'
// import Home from './app/Home'
// import Standings from './app/leagueStandings/components/standings/Standings'
// import About from './app/About'


// const router = (
//   <Router history={browserHistory}>
//     <Route path='/competitions' component={Layout}>
//       <Route path='/competitions/:leagueId' component={Standings} />
//     </Route>
//     <Route path='/about' component={About} />
//   </Router>
// )


render(
  <App />,
  document.getElementById('root')
)
    // <Route path='/:league' component={Layout} />

// const router = (
//   <Router history={browserHistory}>
//     <Route path='/' component={App}>
//       <IndexRoute component={Layout} />
//       <Route path='/cart' component={CartPage} />
//       <Route path='/product/:prodId' component={SingleProductPage} />
//       <Route path='/login' component={LoginPage} />
//     </Route>
//   </Router>
// )