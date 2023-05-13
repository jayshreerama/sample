import React, { useState } from 'react'
import './Toggle.css'

const Toggle = () => {
    const[open, setOpen]=useState(true)
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
            <div className='imgdiv'>
              <img src='https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221027205256021625_262x360jpg' alt=''></img>
            </div>
            <div className='divtext'>
            <h3>BK VEGGIE BURGER</h3>
            <p>Our tribute to classic American taste. BK veg patty, garden fresh crispy lettuce</p>
            <h3>₹ 119/-</h3>
            <button className='popupbtn' onClick={()=>setOpen(!open)}>ADD TO CART+</button>
            </div>
            {/* <button>ADD +</button> */}
          </div>
          <div className='divcard'>
            <div className='imgdiv'>
              <img src='https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20230314074252475398_262x360jpg' alt=''></img>
            </div>
            <div className='divtext'>
            <h1>FRIES KING</h1>
            <p>The perfect crispy partner.</p>
            <h3>₹ 119/-</h3>
            <button className='popupbtn' onClick={()=>setOpen(!open)}>ADD TO CART+</button>
            </div>
            {/* <button>ADD +</button> */}
          </div>
          <div className='divcard'>
            <div>
              <img src='https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221115131212013068_262x360jpg' alt=''></img>
            </div>
            <div className='divtext'>
            <h1>BK CHICKEN BURGER</h1>
            <p>Our tribute to classic American taste. BK chicken patty, garden fresh crispy lettuce</p>
            <h3>₹ 139/-</h3>
            <button className='popupbtn' onClick={()=>setOpen(!open)}>ADD TO CART+</button>
            </div>
            {/* <button>ADD +</button> */}
          </div>
          
        
        </section>
      </div>
    <div className='div1'>
      
      {open && <div className='modal'>
      <img src='https://d1rgpf387mknul.cloudfront.net/products/PDPE/web/2x_web_20220827041248438226_914x416png' alt='' height={'200px'} width={'100%'}></img>
      <h1>VEG WHOOPER</h1>
      <p>Our signature Whopper with 7 layers between the buns. Extra crunchy veg Patty, fresh, crispy lettuce, juicy tomatoes(seasonal), tangy gherkins, creamy and smoky sauces with xxl buns. It’s Not A Burger, it’s a Whopper</p>
      <hr></hr>
      <h1>MAKE IT MEAL</h1>
      <form>
        <div className='div-btn'>
          <input type={"radio"}></input>
          <label>Save 26% | Fries (M) + Pepsi (M)</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <spam>₹120/-</spam>
        </div>
        <div className='div-btn'>
          <input type={"radio"}></input>
          <label>Save 29% | Fries (L) + Pepsi (L)</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <spam>₹130/-</spam>
        </div>
        <div className='div-btn'>
          <input type={"radio"}></input>
          <label>Save 26% | Fries (M) + Pepsi Black (M)</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <spam>₹120/-</spam>
        </div>
        <div className='div-btn'>
          <input type={"radio"}></input>
          <label>Save 5% | Fries (M) + Cappuccino (S)</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <spam>₹179/-</spam>
        </div>
        <div className='div-btn'>
          <input type={"radio"}></input>
          <label>Save 26% | Fries (M) + Classic Cold Coffee</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <spam>₹199/-</spam>
        </div>
      </form>
      <button onClick={()=>setOpen(!open)}>close</button>
      </div>}
    </div>
    </div>
  )
}

export default Toggle
