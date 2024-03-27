import React from 'react'

const Footer1 = () => {
  return (
    <div className='bg-slate-400 mt-52'>
        <div className=' flex flex-col sm:flex-row justify-evenly'>
            <div>
            <img className=' w-[200px]  mt-5 ml-3' src="https://www.monginis.net/wp-content/uploads/2022/06/cropped-NEW-LOGO.png" alt="" />
            </div>
            <div>
                <h1 className=' text-2xl flex-1 ' >Connect with us</h1>
                <i className="fa-brands fa-facebook bg-white m-3 p-1 rounded-full text-2xl"></i>
                <i class="fa-brands fa-instagram bg-white m-2 p-1 rounded-full text-2xl"></i>
                <i class="fa-brands fa-youtube bg-white m-2 p-1 rounded-full text-2xl"></i>
                <i class="fa-brands fa-twitter bg-white m-2 p-1 rounded-full text-2xl"></i>
                <i class="fa-solid fa-comments bg-white m-2 p-1 rounded-full text-2xl"></i>

            </div>
          </div>


        <div className='  flex flex-col gap-5 justify-center  sm:flex-row sm:justify-evenly mt-10 text-black p-5'>
            <div>
               <p> <a href="">Contact Us</a></p>
               <p><a href="">About Us</a></p>
               <p><a href="">Become Franchise</a></p>
               <p><a href="">Become Vendor</a></p>

               
            </div>


            <div>
               <p> <a href="">Cakes</a></p>
               <p><a href="">3D & SP Cakes</a></p>
               <p><a href="">Plastries</a></p>
               <p><a href=""> Savouries</a></p>
               <p><a href=""> Chocolates</a></p>
            </div>

            <div>
               <p> <a href="">Downlode E-brochure</a></p>
               <p><a href="">Recognition & Awards</a></p>
               <p><a href="">cakes Studies</a></p>
               <p><a href="">Our Factories</a></p>
            </div>
            <div>
               <p> <a href="">Refund Policy</a></p>
               <p><a href="">Privcy Policy</a></p>
               <p><a href="">Terms & Conditions</a></p>
               <p><a href=""></a></p>
            </div>



            
        </div>
    </div>
  )
}

export default Footer1;