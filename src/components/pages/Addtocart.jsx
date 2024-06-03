import React from 'react';
import { useParams } from 'react-router-dom';
import Usefetch from '../Usefetch';

const Addtocart = () => {
  const { data } = Usefetch("/item.json");
  const { id } = useParams();
  const Carts = data.find((item) => item.id === parseInt(id));

  if (!Carts) return <div>Item not found</div>;

  return (
    <div>
      {
        data.map((itemsss, index) => {
          return <div key={index}>
            <h1>{itemsss.name}</h1>
          </div>
        })
      }
    </div>
  );
}

export default Addtocart;



