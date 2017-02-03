import React from 'react'
import {Link} from 'react-router'

const Home = () => (
  <div>
    <Link activeClassName='active' to='/about'>About</Link>
    <Link activeClassName='active' to='/'>Home</Link>
    <h1>Home</h1>
  </div>
)

export default Home
