import "./navbar.scss";
import Logo from "../../../assets/img/logo.png";
import Burger from "../../../assets/img/burgerMenu.png";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { DropdownIcon } from "../../../assets/svg/icons";
import NavbarResponsive from "../NavbarResponsiveContent/NavbarResponsive";
import { useState } from "react";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  if (toggle) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "initial";
  }
  return (
    <header>
      <NavbarResponsive setToggle={setToggle} toggled={toggle} />
      <nav className="container">
        <div className="nav-wrapper">
          <div>
            <img className="logo-nav-img" src={Logo} alt="logo" />
          </div>
          <div className="nav-middle-content">
            <ul>
              <li>
                <UncontrolledDropdown className="me-2" direction="down">
                  <DropdownToggle caret className="dropdown-icon">
                    <span>Dropdown</span>
                    <span className="nav-drop-arrow">
                      <DropdownIcon />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="nav-btns-box">
            <button>Schedule a Demo</button>
            <button color="primary">Start free trial</button>
            <button>Sign In</button>
          </div>
          <div className="burger-menu-wrapper">
            <button onClick={() => setToggle(true)}>
              <img src={Burger} alt="burger-menu" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
