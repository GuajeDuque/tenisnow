import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Raquetas from '../Raquetas/Raquetas';
import Pelotas from '../Pelotas/Pelotas';
import Ropa from '../Ropa/Ropa';
import Mochilas from '../Mochilas/mochilas';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">Tenisnow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="/raquetas">Raquetas</Nav.Link>
            <Nav.Link href="/pelotas">Pelotas</Nav.Link>
            <Nav.Link href="/ropa">Ropa</Nav.Link>
            <Nav.Link href="/mochilas">Mochilas</Nav.Link>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;