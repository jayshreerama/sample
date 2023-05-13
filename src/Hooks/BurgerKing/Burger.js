import React from 'react'
import './Berger.css'

const Burger = () => {
  return (
    <div>
      <div>
      <section className='sec1'>
        <nav className='nav1'>
        <article className='art1'>
        <div>
          <img src='https://www.burgerking.in/static/media/logo.d0829240.png' alt='' height='90px'></img>
        </div>
          <div className='nav-blur'>DINE IN/TAKEAWAY</div>
          <div className='nav-orange'><i class="fa-solid fa-toggle-on" style={{color: 'orange'}}></i> DELIVERY</div>
          <div>
            <input id='search' type='text' placeholder='Tap on it to pick your location...'></input>
          </div>
          <div className='nav-blur'><i class="fa-duotone fa-shop"></i> NEARBY SRORES</div>
          <div className='nav-blur'><i class="fa-sharp fa-solid fa-badge-percent"></i> KING DEALS</div>
          <div className='nav-blur'><i class="fa-solid fa-user"></i> LOGIN</div>
          <div className='nav-blur'><i class="fa-sharp fa-solid fa-bag-shopping"></i> CART <i class="fa-sharp fa-solid fa-magnifying-glass" style={{color:'orange'}}></i></div>
          </article>
        </nav>
        </section>
      </div>
      <div>
        <section className='sec2'>
        
          <div className='divcard'>
            <div>
              <img src='https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221027205256021625_262x360jpg' alt='' height='300px' width='100%'></img>
            </div>
            <h3>BK VEGGIE BURGER</h3>
            <p>Our tribute to classic American taste. BK veg patty, garden fresh crispy lettuce</p>
            <h3>₹ 119/-</h3>
            <button>ADD +</button>
          </div>
          <div className='divcard'>
            <div>
              <img src='https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20230314074252475398_262x360jpg' alt='' height='300px' width='100%'></img>
            </div>
            <h1>FRIES KING</h1>
            <p>The perfect crispy partner.</p>
            <h3>₹ 119/-</h3>
            <button>ADD +</button>
          </div>
          <div className='divcard'>
            <div>
              <img src='https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221115131212013068_262x360jpg' alt='' height='300px' width='100%'></img>
            </div>
            <h1>BK CHICKEN BURGER</h1>
            <p>Our tribute to classic American taste. BK chicken patty, garden fresh crispy lettuce</p>
            <h3>₹ 139/-</h3>
            <button>ADD +</button>
          </div>
          <div className='divcard'>
            <div>
              <img src='https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20220613104743347112_262x360jpg' alt='' height='300px' width='100%'></img>
            </div>
            <h1>Burger King</h1>
            <p>Our tribute to classic American taste. BK veg patty, garden fresh crispy lettuce</p>
            <h3>₹ 90/-</h3>
            <button>ADD +</button>
          </div>
        
        </section>
      </div>
      
    </div>
  )
}

export default Burger
