import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = props => (
  <div>
    <ul>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/links'>Links</Link>
      </li>
      <li>
        <Link to='/modal'>Modal</Link>
      </li>
    </ul>
  </div>
)
