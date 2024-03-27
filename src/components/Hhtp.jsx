import React from 'react'
import Slide from './SwiperSlide'




const Home = () => {
  return (
    <div>
      
        <div>
          
            <h1 className=' text-3xl text-center'>Bring A Box Of <span>Happiness Today</span></h1>
            <div className='flex justify-between p-3 '>
              
              <div> 
                </div><img src="https://www.monginis.net/wp-content/uploads/elementor/thumbs/Delivery-web-01-2-prb2tuv0b8xzqq9p0zvt9xnwjdfxugrk30a96dd31e.png" alt="" />
              <img src="https://www.monginis.net/wp-content/uploads/2022/07/Banner-web-1.png" alt="" />
            </div>
            <div ></div>

            <div className='flex justify-evenly '>
              <button className='border-spacing-1 grid-flow-row rounded-sm bg-pink-400'>Order Online</button>
              <button className='border-spacing-1 grid-flow-row rounded-sm bg-pink-400'>Visit our nearest Store</button>
              
          
          
          
   
            </div>
            
     </div>
        <Slide/>
        
    </div>
  )
}

export default Home
