import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navdiv'>
    <section className='sec'>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
      </section>
    </div>
  )
}

export default Navbar