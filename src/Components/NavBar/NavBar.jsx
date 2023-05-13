import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const imgFootballShirts = "https://th.bing.com/th/id/R.827af695907bbd72cd6dc6b7cdced3c4?rik=0EfB%2f%2bjUt1eASw&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f07%2ffootball_logo_122.jpg&ehk=oHUZhf5v2fav%2byWp9MtUsbU0GSdxp%2b947g2agzKcEOE%3d&risl=&pid=ImgRaw&r=0"
    return (
        <header>
            <Link style={{textDecoration:'none'}} to={"/"}>
                <img className="imgFootballShirts" src={imgFootballShirts} alt="Logo Football Shirts"></img>
                <h1>FOOTBALL SHIRTS</h1>
            </Link>

            <ul>
                <li>
                    <NavLink style={{textDecoration:'none'}} to={`/categoria/1`}>Camisetas</NavLink>
                </li>
                <li>
                    <NavLink style={{textDecoration:'none'}} to={`/categoria/2`}>Retro</NavLink>
                </li>

            </ul>

            <CartWidget />

        </header>
    )
}

export default NavBar