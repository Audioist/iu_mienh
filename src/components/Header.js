import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./icons/Shopping-Cart.js";
import IUMLogo from "../img/ium-logo.svg";

import "../styles/Header/Header.css";
import "../styles/Header/Header-Logo.css";
import "../styles/Header/Header-Nav.css";
import "../styles/Header/Header-Cart.css";

class Header extends Component {
  render() {
    const sections = ["Home", "About", "Products", "Contact"];
    return (
      <header className="ium-header">
        <div className="ium-header-hamburger">
          <i className="fas fa-bars" />
        </div>
        <Link to="/">
          <img src={IUMLogo} className="ium-header-logo" />
        </Link>
        <nav className="ium-header-nav">
          <ul>
            {sections.map(item => (
              <li key={item} onClick={this.scrollDown.bind(this, item)}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="ium-header-cart">
          <ShoppingCart />
        </div>
      </header>
    );
  }

  scrollDown(section) {
    let push = section.toLowerCase();
    push === "home"
      ? (push = "")
      : document.getElementById(push).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
  }
}

export default Header;
