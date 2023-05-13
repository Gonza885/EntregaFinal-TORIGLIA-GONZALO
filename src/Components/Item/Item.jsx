
import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <p>ID: {id} </p>
        <p>NOMBRE: {nombre} </p>
        <p>PRECIO: {precio} </p>
        <img className='imgProducto' src={img} alt={nombre} />
        <Link to={`/item/${id}`}> VER DETALLES </Link>
    </div>
  )
}

console.log("Item");
export default Item


