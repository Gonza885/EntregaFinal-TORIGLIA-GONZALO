import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const imgCarrito = "https://i.pinimg.com/originals/bf/19/90/bf1990e247292b756ca7926443f00ab6.jpg"
    return (
        <Link to='/cart'>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
            {
                totalCantidad
            }

        </Link>
    )
}

export default CartWidget


