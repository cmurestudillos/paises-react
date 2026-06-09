import { NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';

const NavbarComponent = () => {
  return (
    <nav className="bg-custom app-navbar">
      <NavLink to="/home" className="navbar-brand">
        <img src={logo} height="32" alt="Paises Logo" />
        <span>Paises</span>
      </NavLink>
    </nav>
  );
};

export default NavbarComponent;
