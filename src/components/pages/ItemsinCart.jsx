import React from 'react'
import { useContext } from 'react'
import { context } from '../Content'
import { Link } from 'react-router-dom'
const ItemsinCart = () => {
    const { cart, deleteitems } = useContext(context);
    return (
        <>
            <div className='border-b-2 border-gray-800 bg-[#C0C0C0] pb-[10px] pt-[5px]'>
                <h1 className='font-semibold text-[30px]'>
                    CART PAGE
                </h1>
            </div>
            <div className='flex  justify-center border-2 w-full  pt-[3rem] bg-[#C0C0C0] md:h-screen h-[1400px] '>

                {


                    cart && cart.length > 0 ? (
                        <div>
                            <div className='flex gap-9 justify-center flex-wrap'>
                                {
                                    cart.map((item, index) => (
                                        <div key={index} className='border-2 h-[400px] bg-[#F5F5F5] p-9'>
                                            <h1 className='font-bold'>{item.name}</h1>
                                            <p className='py-3'>Price: {item.price}</p>
                                            <img className='w-[200px]' src={item.imagePath} alt={item.name} />
                                            <button className='p-[10px] px-[20px] border-2 hover:bg-black hover:text-white border-[#222222] font-semibold rounded-xl  mb-[10px]'
                                                onClick={() => deleteitems(item.id)}>
                                                Delete</button>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='ml-[28px]'>
                                <Link to="/">
                                    <button className='p-[10px] px-[20px] border-2 hover:bg-black hover:text-white border-[#222222] font-semibold rounded-xl mt-[10px] mx-[10px]'>
                                        Add Product
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className='text-center '>
                            <h2 className='text-2xl font-bold'>Your cart is empty</h2>
                            <p className='mt-4'>Add some items to your cart to see them here.</p>
                            <Link to="/">
                                <button className='p-[10px] px-[20px] border-2 hover:bg-black hover:text-white border-[#222222] font-semibold rounded-xl'>
                                    Add Product
                                </button>
                            </Link>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default ItemsinCart;