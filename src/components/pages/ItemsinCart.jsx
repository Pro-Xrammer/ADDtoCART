import React from 'react'
import { useContext } from 'react'
import { context } from '../Content'
const ItemsinCart = () => {
    const { cart, deleteitems } = useContext(context);
    return (
        <>
            <div className='flex gap-9 justify-center border-2 w-full  pt-[3rem]'>


                {


                    cart.map((item, index) => {
                        return <div key={index} className='border-2 border-red-700 p-9'>
                            <h1 className='font-bold'>{item.name}</h1>
                            <p className='py-3'>Price: {item.price}</p>
                            <img src={item.imagePath} alt={item.imagePath} />

                            <button className='bg-gray-400 px-7 rounded-lg py-2 mt-3 ' onClick={() => deleteitems(item.id)}>Delete</button>

                            <p>{ }</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default ItemsinCart;