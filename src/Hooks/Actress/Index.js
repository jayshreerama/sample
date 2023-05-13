import React from 'react'
import './Index.css'

const index = () => {
  
    
  return (
    <div>
      <div className='nav-div'>
        <nav className='nav1'>
          <article className='art1'>
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
              <input type={"text"} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div>Login as <i class="fa-solid fa-right-to-bracket">{ name}</i></div>
          </article>
        </nav>
      </div>
      <div className='divcard'><img src='https://www.prokerala.com/news/photos/imgs/1200/pooja-hegde-970250.jpg' alt='' height='300px' width='90%'></img>
      <p className='p1'>Pooja Hegde</p>
      <p className='p2'>Pooja Hegde is an Indian actress who appears in Telugu, Hindi and Tamil films. She began her career as a model and was crowned as the second runner-up at the 2010 I Am She–Miss Universe India pageant.</p>
      <button onClick={()=>setsub("subscribed")}>{sub}<i class="fa-solid fa-bell"></i></button>
      
      </div>
    </div>
  )
}

export default index
