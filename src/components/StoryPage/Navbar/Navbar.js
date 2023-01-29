import "./navbar.scss";
import Logo from "../../../assets/img/logo.png";
import Burger from "../../../assets/img/burgerMenu.png";
import NavbarResponsive from "../NavbarResponsiveContent/NavbarResponsive";
import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../assets/img/ploygon-arrow.png";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { DropdownIcon, ModalIconCustom } from "../../../assets/svg/icons";
import DropGrayImg from "../../../assets/img/dropdown-gray-img.png";
import { Modal } from "reactstrap";
import ModalInput from "./ModalInput";

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
const modalData = [
  {
    label: "First Name",
  },
  {
    label: "Last Name",
  },
  {
    label: "Phone Number",
  },
  {
    label: "Country",
  },
  {
    label: "Agency Name",
  },
  {
    label: "Number of Shopify Clients",
  },
];
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleFunc = () => setModal(!modal);
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
                      {dropData.map(({ title, description }, idx) => (
                        <div className="drop-down-menu-nav-inner" key={idx}>
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
              <li>
                <Link to={"/merchant"}>Merchant</Link>
              </li>
              <li>
                <Link to={"/landing"}>Landing</Link>
              </li>
              <li>
                <Link to={"/price"}>Pricing</Link>
              </li>
              <li>
                <Link to={"/storypage"}>Storypage</Link>
              </li>
            </ul>
          </div>
          <div className="nav-btns-box">
            <button onClick={() => toggleFunc()}>Schedule a Demo</button>
            <button>Sign In</button>
          </div>
          <div className="burger-menu-wrapper">
            <button onClick={() => setToggle(true)}>
              <img src={Burger} alt="burger-menu" />
            </button>
          </div>
          <Modal className="modalNavbar" isOpen={modal} toggle={toggleFunc}>
            <button
              onClick={() => setModal(false)}
              className="modal-close-icon"
            >
              <ModalIconCustom />
            </button>
            <h1>Schedule a demo</h1>
            <form>
              {modalData.map(({ label }, idx) => (
                <ModalInput label={label} key={idx} />
              ))}
              <button type="submit" className="form-modal-btn">
                Confirm
              </button>
            </form>
          </Modal>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
