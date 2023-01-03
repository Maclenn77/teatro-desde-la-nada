import {
    Link,
} from 'react-router-dom';
/* import './Navbar.css'; */

const Navbar = () => (
    <nav>
        <h1><Link to="/">Teatro Desde la nada</Link></h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/talleres">Talleres</Link>
            </li>
            <li>
                <Link to="/contacto">Contacto</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;