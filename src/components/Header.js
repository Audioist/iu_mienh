import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartIcon from "../img/ShoppingCartIcon";
import IumLogo from "../img/ium-logo.svg";
import HamburguerIcon from "../img/HamburgerIcon";

import "../styles/Header/Header.css";
import "../styles/Header/Header-Logo.css";
import "../styles/Header/Header-Nav.css";
import "../styles/Header/Header-Cart.css";

class Header extends Component {
  render() {
    const sections = ["Home", "About", "Products", "Contact"];

    return (
      <header className="ium-header">
        <HamburguerIcon className="ium-header-hamburger" />
        <h1 className="ium-header-logo">
          <NavLink to="/" isActive={this.scrollDown.bind(this, "home")}>
            <img src={IumLogo} alt="IU Mien logo" />
          </NavLink>
        </h1>
        <nav className="ium-header-nav">
          <ul>
            {sections.map(item => (
              <NavLink
                key={item}
                to="/"
                isActive={this.scrollDown.bind(this, item)}
              >
                <li>{item}</li>
              </NavLink>
            ))}
          </ul>
        </nav>
        <Link to={"/cart"}>
          <ShoppingCartIcon className="ium-header-cart" />
        </Link>
      </header>
    );
  }

  scrollDown(section) {
    let push = section.toLowerCase();
    if (push === "home") {
      push = "top";
    }
    let behaviour = {
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    };
    let loc = document.getElementById(push);
    loc.scrollIntoView(behaviour);
  }
}

export default Header;
