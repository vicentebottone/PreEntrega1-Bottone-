import CartContainer from "./CartContainer"
import CategoryItem from "./CategoryItem"
import MenuButton from "./MenuButton"
import Brand from "./brand"



const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-blue">
        <div className="container-fluid">
          <Brand/>
          <MenuButton/>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <CategoryItem isActive= {true} name = "PRODUCTOS" />
              </li>
              <li className="nav-item">
              <CategoryItem isActive= {false} name = "CONOCENOS!" />
              </li>
              <li className="nav-item">
              <CategoryItem isActive= {false} name = "HISTORIA" />
              </li>
              <li className="nav-item">
              <CategoryItem isActive= {false} name = "FIXTURE" />
              </li>
            </ul>
          </div>
          <CartContainer/>
        </div>
      </nav>
    )
}

export default Navbar;