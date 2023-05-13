import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='body'>
    <nav className='nav'>
    <article className='art'>
        <div>
        <i class="fa-brands fa-apple"></i>
        </div>
        <div>Home</div>
        <div>About</div>
        <div>Gallery</div>
        <div>Contact</div>
        <div>Service</div>
        <div>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div>
        <i class="fa-solid fa-phone"></i>
        </div>
    </article>
    </nav>   

    <div className='class-div1'>
        <div className='div1'></div>
    </div>
    </div>
  )
}

export default Navbar
