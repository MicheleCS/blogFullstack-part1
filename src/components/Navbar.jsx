import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2>
        <Link to={'/'}>BlogZeira</Link>
      </h2>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
         <Link to={'/new'} className="new-btn">Novo Post</Link>
        </li>
      </ul>
    </nav>

  );
}
