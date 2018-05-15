import React, { Component } from "react";
import { Link } from "react-router-dom";
import iumLogo from "../img/ium-logo.svg";
import shoppingCart from "../img/shopping-cart.svg";

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
        <h1 className="ium-header-logo">
          <Link to="/">IU Mien</Link>
        </h1>
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
          <i className="fas fa-shopping-cart" />
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
