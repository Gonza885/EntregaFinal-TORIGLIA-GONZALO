import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'


import { CarritoContext } from '../../context/CarritoContext'

import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {


    const [agregarCantidad, setagregarCantidad] = useState(0);
    const { agregarProducto } = useContext(CarritoContext);


    const manejadorCantidad = (cantidad) => {
        setagregarCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta excepturi praesentium quae aspernatur asperiores, labore voluptatem, culpa minima ipsum nihil suscipit repellat, magni debitis inventore repudiandae. Tempore, voluptas dolor?</p>
            <img src={img} alt={nombre} />

            {
                agregarCantidad > 0 ? (<Link to="/cart">TERMINAR COMPRA</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }

        </div>
    )
}

export default ItemDetail
