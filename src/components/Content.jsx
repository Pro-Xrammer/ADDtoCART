import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const context = createContext();

const Content = ({ children }) => {
    const [cart, setcart] = useState([]);
    const additems = (items) => {
        setcart([...cart, items])
    }
    const deleteitems = (id) => {
        setcart(cart.filter((item) => item.id !== id))
    }
    const clear = () => {
        setcart([]);
    }

    return (
        <context.Provider value={{ cart, additems, deleteitems, clear }} >
            {children}
        </context.Provider>
    )
}

export default Content;