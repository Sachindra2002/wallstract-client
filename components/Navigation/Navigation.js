import { Component } from "react";
import { MenuItems } from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../Assets/Logo/logo2.png";

class Navbar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img className="image-logo" src={Logo.src} alt="Logo" />
        </div>
        {/* <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? faTimes : faBars}></i>
        </div>   */}
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
