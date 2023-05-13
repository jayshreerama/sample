import React, { useState } from 'react'
import './CR7card.css'

const CR7card = () => {
  const[count, setCount]=useState(0)
  function clicked(){
    setCount(count+1)
    }
  function click(){
    setCount(count-1)
  }
  return (

<div>

<div className='main-div1'>
      <nav className='main-nav1'>
        <article className='main-art1'>
            <div>
                <i class="fa-solid fa-house"></i>
            </div>
            <div>Home</div>
            <div>About</div>
            <div>Gallery</div>
            <div>Contact</div>
            <div>
                <i class="fa-solid fa-phone"></i>
            </div>
            <div>
                <i class="fa-solid fa-cart-shopping"></i>{count}
            </div>
        </article>
      </nav>
    </div>

    <div className='main-div'>

      <div className='divcard'><img src='https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/j/u/w/7-1522-multi-shozie-multicolor-original-imagegdaad9g8mvs-bb.jpeg?q=70' alt='' height='290px' width='100%'></img>
      <p>Sneakers Casual</p>
      <p id='div-p2'>MRP Rs: 4999.0/-</p>
      <button className='btn1' onClick={clicked}>ADD TO CART</button>
      <button className='btn1' onClick={click}>REMOVE</button>    
      </div>

      <div className='divcard'><img src='https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVtYSUyMHNob2V8ZW58MHx8MHx8&w=1000&q=80' alt=''height='290px' width='100%'></img>
      <p>Puma White Sneakers</p>
      <p id='div-p2'>MRP Rs: 5500.0/-</p>
      <button className='btn1' onClick={clicked}>ADD TO CART</button>
      <button className='btn1' onClick={click}>REMOVE</button>
      </div>

      <div className='divcard'><img src='https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/a/r/z/-original-imagg4kcd8s98dmh.jpeg?q=70' alt='' height='290px' width='100%'></img>
      <p>CR7 Football Shoose</p>
      <p id='div-p2'>MRP Rs: 25599.0/-</p>
      <button className='btn1' onClick={clicked}>ADD TO CART</button>
      <button className='btn1' onClick={click}>REMOVE</button>
      </div>

      <div className='divcard'><img src='https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_776%2Cy_755/MTk0Njk2MDgyNjkxNzI4NTQ2/ja-morant-shoe.jpg' alt='' height='290px' width='100%'></img>
      <p>Ja Morant Debuts</p>
      <p id='div-p2'>MRP Rs: 12000.0/-</p>
      <button className='btn1' onClick={clicked}>ADD TO CART</button>
      <button className='btn1' onClick={click}>REMOVE</button>
      </div>

    </div>

    </div>
  )
}

export default CR7card
