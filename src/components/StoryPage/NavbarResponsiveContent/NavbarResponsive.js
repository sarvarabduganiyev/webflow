import { CancelIcon } from "../../../assets/svg/icons";
import "../Navbar/navbar.scss";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function NavbarResponsive({ toggled, setToggle }) {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div
      className={
        toggled
          ? "responsiveContent responsiveContenActive"
          : "responsiveContent"
      }
    >
      <div className="cansel-wrapper">
        <h1>Menu</h1>
        <button onClick={() => setToggle(false)}>
          <CancelIcon />
        </button>
      </div>
      <div>
        <hr className="hr-line" />
        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader
              style={{ outline: "none !important" }}
              targetId="1"
            >
              <h1 className="accardion-title">Solutions</h1>
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <ul>
                <li className="responsive-lists">For Merchants</li>
                <li className="responsive-lists">For Agencies</li>
                <li className="responsive-lists">Featured Customer Story</li>
              </ul>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        <ul>
          <li className="responive-section-links">About</li>
          <li className="responive-section-links">Blog</li>
          <li className="responive-section-links">Pricing</li>
        </ul>
        <div className="responsive-btns-box">
          <button>Schedule a Demo</button>
          <button>Start free trial</button>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default NavbarResponsive;
