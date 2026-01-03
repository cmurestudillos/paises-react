import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../../assets/img/logo.png';

const NavbarComponent = () => {
  return ( 
    <div>
      <Navbar expand="lg" type="light" className="navbar navbar-expand-lg navbar-light bg-custom">
        <Navbar.Brand><img src={logo} alt="Logo" title="Logo" width="55" height="55" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/home" className="active mr-2" >Paises</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>        
    </div>
  );
}
 
export default NavbarComponent;