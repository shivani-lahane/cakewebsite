import React from 'react'
import Slider from './Slider'





const Home = () => {

    return (
        <div>
            <div>

                <Slider />
                <h1 className='text-3xl text-center font-bold'>Bring A Box Of<span>Happiness Today</span>
                </h1>

                <div className='flex justify-evenly p-10 gap-10'>
                    <div className=' w-[500px]  '>
                        <img className='' src='https://www.monginis.net/wp-content/uploads/elementor/thumbs/Delivery-web-01-2-prb2tuv0b8xzqq9p0zvt9xnwjdfxugrk30a96dd31e.png'></img>
                    </div>

                    <div className=' w-[500px]'>
                        <img className=' ' src='https://www.monginis.net/wp-content/uploads/2022/07/Banner-web-1.png'></img>
                    </div>


                </div>

                <div className=" my-2 text-center flex justify-evenly">
                    <button
                        type="submit"
                        className="px-6 py-1 border-2 rounded-full text-white hover:bg-white hover:text-black bg-pink-600 "
                    >
                        Order Online
                    </button>

                    <button
                        type="submit"
                        className="px-6 py-1 border-2 rounded-full text-white hover:bg-white hover:text-black bg-pink-600 justify-items-start"
                    >
                        Visit Our Nearest Store
                    </button>




                </div>

                <div className='bg-slate-300'>
                    <div>
                        <h1 className='text-3xl text-center font-bold mt-10 '>Shop By <span>Bestseller Categories</span></h1>
                    </div>

                    <div className=' grid grid-cols-4 gap-5 p-5'>
                        <div>
                            <img className='w-[500px] h-[250px] object-cover rounded-full' src='https://www.dpsainiflorist.com/wp-content/uploads/2023/04/DP3028.jpg'></img>
                            <h1 className='text-center font-semibold'>TALL AND FANCY</h1>
                        </div>
                        <div>

                            <img className='w-[500px] h-[250px] object-cover rounded-full' src='https://www.monginis.net/wp-content/uploads/elementor/thumbs/cake2-pq1u698txwyl3451s6wcf9vzm4vf7nqg7xcjhbw0k0.webp'></img>
                            <h1 className='text-center font-semibold'>EXOTIC CAKES</h1>
                        </div>
                        <div>
                            <img className='w-[500px] h-[250px] object-cover rounded-full' src='https://whipped.in/cdn/shop/products/zyro-image_36_1800x1800.jpg?v=1686824457'></img>
                            <h1 className='text-center font-semibold'>PREMIUM CAKES</h1>
                        </div>

                        <div>
                            <img className='w-[500px] h-[250px] object-cover rounded-full' src='https://m.media-amazon.com/images/I/418zBNWoVnS.jpg'></img>
                            <h1 className='text-center font-semibold'>DESIGNER CAKES</h1>
                        </div>

                    </div>

                    <div className='mt-10 bg-slate-100'>
                        <h1 className='text-center font-bold text-3xl'>Shop By <span>3D & SP Cakes</span> </h1>
                        <h1 className='text-xl text-center'>Lorem Ipsum has been the industry’s standard dummy text</h1>
                        </div>

                        <div className=' grid grid-cols-4 gap-5 p-5'>
                        <div>
                            <img className='w-[300px] h-[250px] object-cover rounded-full ml-4 ' src='https://assets.winni.in/product/primary/2023/4/84499.jpeg?dpr=1&w=1000'></img>
                            <h1 className='text-center font-semibold'>TALL AND FANCY</h1>
                        </div>

                        <div>
                            <img className='w-[300px] h-[250px] object-cover rounded-full ml-4 ' src='https://5.imimg.com/data5/ANDROID/Default/2021/5/TT/RW/SC/89233534/product-jpeg-500x500.jpg'></img>
                            <h1 className='text-center font-semibold'>EXOTIC CAKES</h1>
                        </div>

                        <div>
                            <img className='w-[300px] h-[250px] object-cover rounded-full ml-4 ' src='https://res.cloudinary.com/insignia-flowera-in/images/f_auto,q_auto/v1698919476/simple-pineapple-cake_82061f2b2/simple-pineapple-cake_82061f2b2.jpg'></img>
                            <h1 className='text-center font-semibold'>PREMIUM CAKES</h1>
                        </div>

                        <div>
                            <img className='w-[300px] h-[250px] object-cover rounded-full ml-4 ' src='https://www.foodandwine.com/thmb/H9NS3GaVp-2XHt6wbPtrhwh0bws=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Black-Forest-Cake-FT-RECIPE0623-29bb291902e845bab17a7fc1d65e4ebb.jpg'></img>
                            <h1 className='text-center font-semibold'>DESIGNER CAKES</h1>
                        
                        </div>
                        </div>

                    

                    <div>

                    </div>





                </div>
            </div>


        </div>
    )
}

export default Home