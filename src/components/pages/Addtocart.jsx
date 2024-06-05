import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Usefetch from '../Usefetch';
import { context } from '../Content';
import { Link } from 'react-router-dom';
const Addtocart = () => {
  const { data } = Usefetch("/item.json");

  const { additems } = useContext(context)

  const { id } = useParams();

  const item = data.find(item => item.id === parseInt(id));

  return (
    <div>
      <div className='border-b-2 border-gray-800 bg-[#C0C0C0] pb-[10px] pt-[5px]'>
        <h1 className='font-semibold text-[30px]'>
          DETAILS PAGE
        </h1>
      </div>
      <div className=' flex justify-center items-center h-screen bg-[#C0C0C0] '>
        {item ? (
          <div className='w-[450px]  flex flex-col justify-center items-center  text-center bg-[#F5F5F5] p-[4rem]  shadow-2xl text-[15px]  '>
            <h1 className='font-semibold '><span className='font-bold'>Product Name:</span> {item.name}</h1>
            <p className='font-semibold mb-[10px]'> <span className='font-bold'>Product Name:</span>{item.price}</p>
            <img className='w-[200px] ' src={item.imagePath} alt={item.name} />
            <div className='flex'>
              <h1 className='text-center '>
                <span className='font-bold m-[10px]'> Descripition </span> <br />
                {item.descripition}
                <div>
                  <button className='p-[10px] border-2 hover:bg-black hover:text-white  border-[#222222] font-semibold rounded-xl mt-[20px]'
                    onClick={() => { additems(item) }}> Add Product  </button>
                  <Link to="/">
                    <button className='p-[10px] px-[20px] border-2 hover:bg-black hover:text-white border-[#222222] font-semibold rounded-xl mt-[10px] mx-[10px]'>
                      Home Page
                    </button>
                  </Link>
                </div>
              </h1>

            </div>
          </div>

        ) : (
          <p>Item not found</p>
        )}
      </div>
    </div>

  );
}

export default Addtocart;



