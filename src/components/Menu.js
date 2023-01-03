import {
    Link,
} from 'react-router-dom';
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import logo from "../images/logo.jpg";

const Menu = () => (
    <Navbar expand={"lg"} bg={"dark"} variant={"dark"}>
        <Container>
            <Navbar.Brand href={'/teatro-desde-la-nada'}>
                <img src={logo} alt={'Logo de Teatro Desde La Nada'} height={42} className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={'basic-navbar-nav'} />
            <Navbar.Collapse id={'basic-navbar-nav'}>
                <Nav className={'me-auto'}>
                    <Nav.Link>
                        <Link className={'text-decoration-none text-white'} to={'/teatro-desde-la-nada'}>
                            Inicio
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className={'text-decoration-none text-white'} to={'/talleres'}>
                            Talleres
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className={'text-decoration-none text-white'} to={'/contacto'}>
                            Contacto
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    /* <nav>
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
    </nav> */
);

export default Menu;