import { CartContext } from '../..//context/CartContext/CartContext'
import React from 'react'
import { useContext } from 'react'
import './CartItem.css'

const CartItem = ({ items }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div className='Container'>
            <picture>
                <img src={items.img} alt={items.name} className="imgContainer"/>
            </picture>
            <div className='itemsCategory'>
                <h2>
                    {items.name}
                </h2>
                <p>
                    Cantidad: {items.quantity}
                </p>
                <p>
                    Subtotal: {items.quantity * items.price}
                </p>
                <button onClick={() => removeItem(items.id)}>Eliminar</button>
            </div>
        </div>
    )
};

export default CartItem
