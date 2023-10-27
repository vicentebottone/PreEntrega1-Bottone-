
import { Link } from 'react-router-dom';
import Brand from './Brand';
import MenuButton from './MenuButton';
import CartContainer from './CartContainer';  
import ContainerCart from './ContainerCART.JSX';




const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-blue">
      <div className="container-fluid">
        <Brand />
        <MenuButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/productos" style={{ textDecoration: 'none' }}>PRODUCTOS</Link>
            </li>
            <li className="nav-item">
              <Link to="/conocenos" style={{ textDecoration: 'none' }}>CONOCENOS!</Link>
            </li>
          </ul>
        </div>
        <CartContainer />
        <ContainerCart/>
      </div>
    </nav>
  );
};

export default Navbar;