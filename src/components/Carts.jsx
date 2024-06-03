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

            <div className='flex justify-center gap-[6rem]'>

                {
                    data.map((item) => {
                        return (
                            <div className=' border-4 my-[4rem] border-red-500 ' key={item.id}>
                                <div className='w-[200px]'>
                                    <h2>{item.name}</h2>
                                    <p>{item.price}</p>
                                    <img className='h-[200px]' src={item.imagePath} alt="" />

                                </div>
                                <div className='flex justify-center py-5'>
                                    <button className='bg-slate-800 text-white rounded-md p-[4px] px-3' onClick={() => additems(item)}>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <Link to={"/addtocart/1"}>
                <button className='ml-[15rem] bg-slate-800 text-white p-[10px] px-4 rounded-full my-[4px]' >Go to Full Details</button>
            </Link>
            <Link to={"/addtocart/2"}>
                <button className='ml-[10rem] bg-slate-800 text-white p-[10px] px-4 rounded-full my-[4px]' >Go to Full Details</button>
            </Link>
            <Link to={"/addtocart/3"}>
                <button className='ml-[9rem] bg-slate-800 text-white p-[10px] px-4 rounded-full my-[4px]' >Go to Full Details</button>
            </Link>
            <Link to={"/addtocart/4"}>
                <button className='ml-[10rem] bg-slate-800 text-white p-[10px] px-4 rounded-full my-[4px]' >Go to Full Details</button>
            </Link>
            <Link to={"/ItemsinCart"}>
                <div className='flex justify-center mt-[30px]'>
                    <button className='bg-slate-600 flex  text-white p-[20px] px-[40px]'> Items In Cart<FaCartShopping className='relative top-1 left-8 ' /> {cart.length}</button>
                </div>
            </Link>
        </>
    )
}
export default Carts;