import "./navbar.scss";
import Logo from "../../../assets/img/logo.png";
import Burger from "../../../assets/img/burgerMenu.png";
import NavbarResponsive from "../NavbarResponsiveContent/NavbarResponsive";
import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../assets/img/ploygon-arrow.png";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { DropdownIcon } from "../../../assets/svg/icons";
import DropGrayImg from "../../../assets/img/dropdown-gray-img.png";

const dropData = [
  {
    title: "For Merchants",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    title: "For Merchants",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
  {
    title: "For Merchants",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
  },
];
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
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
                  <DropdownToggle
                    onClick={() => setActive(true)}
                    className="dropdown-icon dropdown-toggle"
                    caret
                  >
                    Solution
                    <DropdownIcon />
                  </DropdownToggle>
                  <DropdownMenu className="drop-down-menu-nav">
                    <img className="arrow-drop-white" src={Arrow} alt="arrow" />
                    <h1>Solution</h1>
                    <div className="drop-down-menu-nav-grid-system">
                      {dropData.map(({ title, description }) => (
                        <div className="drop-down-menu-nav-inner">
                          <h3>{title}</h3>
                          <p>{description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="nav-drop-down-bottom-content">
                      <img src={DropGrayImg} alt="drop-img" />
                      <div className="nav-drop-down-bottom-content-desc-wrapper">
                        <h4>Case Study #1 - TBD</h4>
                        <p>
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit.
                        </p>
                      </div>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li>About</li>
              <li>Blog</li>
              <li>
                <Link to={"/price"}>Pricing</Link>
              </li>
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
