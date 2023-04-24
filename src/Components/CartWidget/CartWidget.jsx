import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://i.pinimg.com/originals/bf/19/90/bf1990e247292b756ca7926443f00ab6.jpg"
    return (
        <div>
            <img className='imgCarrito' src= {imgCarrito} alt="Carrito"/>
            <strong>4</strong>
            
        </div>
    )
}

export default CartWidget