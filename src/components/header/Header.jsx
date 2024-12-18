import React,{useState} from "react";
import "../header/Header.css";
import logo from "../../assets/icons and logo/logo.png";
import menu from "../../assets/icons and logo/menu.png";
import closeMenu from '../../assets/icons and logo/close.png'
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav-options">
          
          
        <div className="menu" onClick={toggleMenu}>
        <img src={isMenuOpen ? closeMenu : menu} alt="Menu" />
      </div>
      <nav className={`nav-options ${isMenuOpen ? "open" : ""}`}/>
      <ul>
            {
              location.pathname === "/" && (
                <>
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
                 </>
              )
            }
            </ul>
               
                { ((location.pathname === "/alltemplates" ||location.pathname === "/Resume")  &&(  <ul><li> <RouterLink to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</RouterLink></li>
              </ul>))
}
              
             
              {(location.pathname === "/Form" &&( <ul> <li><RouterLink to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</RouterLink></li>
                <li><RouterLink to="/alltemplates" style={{ color: "inherit", textDecoration: "none" }}>Templates</RouterLink></li>
                </ul>
              ))
            }
               
                

              
              
            

          
        </div>
      </header>
    </>
  );
}

export default Header;
