import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import Usefetch from './Usefetch';
import { useContext } from 'react';
import { context } from './Content';
const Carts = () => {



    const { cart, additems } = useContext(context);

    const { data } = Usefetch("/item.json")
    return (
        <>


            <div className=' bg-[#C0C0C0]  md:h-screen h-[2800px]'>
                <div className='border-b-2 border-gray-800 pb-[10px] pt-[5px]'>
                    <h1 className='font-semibold text-[30px]'>
                        HOME PAGE
                    </h1>
                </div>
              
                <div className='flex justify-center gap-[6rem] text-center flex-wrap '>

                    {
                        data.map((item) => {
                            return (
                                <div className='my-[4rem] px-[2rem]  bg-[#F5F5F5] shadow-2xl ' key={item.id}>
                                    <div className='w-[200px] font-bold'>
                                        <h2>{item.name}</h2>
                                        <p>{item.price}</p>
                                        <img className='h-[200px] mx-[2rem] ' src={item.imagePath} alt="" />

                                    </div>
                                    <div className='flex justify-center py-5'>
                                        <button className='p-[10px] border-2 hover:bg-black hover:text-white  border-[#222222] font-semibold rounded-xl mt-[20px]' onClick={() => additems(item)}>Add Product</button>
                                    </div>
                                    <Link to={`/addtocart/${item.id}`}>
                                        <div className='flex justify-center'>
                                            <button className='p-[10px] border-2 hover:bg-black hover:text-white  border-[#222222] font-semibold rounded-xl mb-[20px]' >Product Details</button>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
                <Link to={"/ItemsinCart"}>
                    <div className='flex justify-center mt-[30px] '>
                        <button className='bg-slate-600 flex  text-white py-[10px] px-[40px] absolute top-2 right-8'>  {cart.length} <FaCartShopping className='relative top-1 left-2 ' /></button>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default Carts;