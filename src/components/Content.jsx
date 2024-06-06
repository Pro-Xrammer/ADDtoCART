import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const context = createContext();

const Content = ({ children }) => {
    const [cart, setcart] = useState([]);
    const additems = (items) => {
        if (cart.find((curritem) => curritem.id === items.id)) {
            toast("Item Already Added", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else {
            setcart([...cart, items])
            toast("Added Sucessfully", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const deleteitems = (id) => {
        setcart(cart.filter((item) => item.id !== id))
        toast("Deleted Sucessfully", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <context.Provider value={{ cart, additems, deleteitems }} >
            {children}
        </context.Provider>

    )
}

export default Content;