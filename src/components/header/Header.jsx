import React from "react";
import "../header/Header.css";
import logo from "../../assets/icons and logo/logo.png";
import menu from "../../assets/icons and logo/menu.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav-options">
          <ul>
          
            {/* <img className="menu" src={menu} alt="menu option" /> */}

            {
              location.pathname === "/" ? (<ul>
                <li>
                <ScrollLink to="home" smooth={true} duration={500}  offset={-100}>
                  Home
                </ScrollLink> </li>
                <li>
                <ScrollLink to="steps_to_use" smooth={true} duration={500}  offset={-100}>
                  Easy to use
                </ScrollLink>
                 </li>
                <li>
                  <RouterLink to="/alltemplates" style={{ color: "inherit", textDecoration: "none" }}>Templates</RouterLink>
                  </li>
                  <li>
                <ScrollLink to="feature_page" smooth={true} duration={500}  offset={-100}>
                  Features
                </ScrollLink>
                 </li>
               
                

              </ul>):( <RouterLink to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</RouterLink>
              )
            }
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
