import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
const [menu, setmenu] = useState(false);

  return (
    <div><header className=" body-font bg-slate-50 text-black">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      

        <div  className='w-11/12  sm:w-11/12 m-auto flex justify-between'>
        <div >
        <img  className='w-[100px]'src='https://th.bing.com/th/id/OIP.TbApRwMKorvBomm6QDOv8gAAAA?w=154&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt='LOGO'/>
        </div>

        
      
      <div className="md:ml-auto sm:flex flex-wrap  text-base justify-center items-center  hidden">
        <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
        <Link to="/products" className="mr-5 hover:text-gray-900">Our products</Link>
        <Link to="/aboutus" className="mr-5 hover:text-gray-900">About Us</Link>
        <Link to="/blog" className="mr-5 hover:text-gray-900">Blog</Link>
        <Link to="/franchise" className="mr-5 hover:text-gray-900"> Become a Franchise</Link>
      </div>
<div onClick={()=>{
  setmenu(!menu);
}} className='block sm:hidden'>
{menu ?<IoCloseSharp /> :<FaBars /> }
</div>

 
        </div>
        

      



      <div className={`${menu ? "block": "hidden"} w-11/12 h-[700px] m-auto bg-slate-600`}>

        
        <div>
          <ul className='text-white flex flex-col gap-y-5 justify-center items-center p-3 '>


<li onClick={()=>{
  setmenu(false);
}}>
<Link to="/">
  Home
  </Link>
</li>


<li onClick={()=>{
  setmenu(false);
}}>
<Link to="/Products">
Products
 </Link>

</li>



<li onClick={()=>{
  setmenu(false);
}}>
<Link to="/aboutus">
  aboutus
 </Link>

  
</li>
<li onClick={()=>{
  setmenu(false);
}}>
<Link to="/blog">
blog
</Link>

</li>



<li onClick={()=>{
  setmenu(false);
}}>
<Link to="/franchise">
franchise
</Link>

</li>






          </ul>
        </div>

</div>

    </div>



  </header>
  </div>
  )
}

export default Header