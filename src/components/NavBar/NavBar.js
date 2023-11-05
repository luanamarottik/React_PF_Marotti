import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Manu.Be</h3>
            </Link>
            <div className='categorias'>
                <NavLink to={'/category/vestido'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Vestido</NavLink>
                <NavLink to={'/category/top'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Top</NavLink>
                <NavLink to={'/category/pollera'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pollera</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;