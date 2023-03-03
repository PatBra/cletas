import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Route, Router } from 'react-router-dom';
import Search from './Search';

//import { Link, Route } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/"><i className="fa-solid fa-bicycle"></i> Cletas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Productos</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <div className="col-12 col-md-6 mt-2 mt-md-0">
            <Search />
            </div>
          {/* <Route render={(history) => <Search history={history}/>}/> */}
          <div>
          <div className='col-12 col-md-6 mt-2 mt-md-0 text-center'>
        <Link to='/login' className='btn ml-4 text-white' id="login_btn">Login</Link>

        <span id="cart" className='ml-3 text-white'>Cart</span>
        <span className='ml-1' id="cart_count">2</span>
      </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;