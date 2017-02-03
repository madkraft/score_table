import React from 'react'
import {Link} from 'react-router'

const About = () => (
  <div>
    <Link activeClassName='active' to='/about'>About</Link>
    <Link activeClassName='active' to='/competitions/426'>Home</Link>
    <h1>About</h1>
  </div>
)

export default About
