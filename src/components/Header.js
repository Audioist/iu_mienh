import React from "react";
import { Link } from "react-router-dom";
import iumLogo from "../img/ium-logo.svg";
import shoppingCart from "../img/shopping-cart.svg";

import "../styles/Header/Header.css";
import "../styles/Header/Header-Logo.css";
import "../styles/Header/Header-Nav.css";
import "../styles/Header/Header-Cart.css";

const Header = () => {
  let sections = ["Home", "About", "Products", "Contact"];

  return (
    <header className="ium-header">
      <div className="ium-header-hamburger">
        <i className="fas fa-bars" />
      </div>
      <Link to="/">
        <img className="ium-header-logo" src={iumLogo} alt="IU MIEN logo" />
      </Link>
      <nav className="ium-header-nav">
        <ul>{sections.map(item => <li key={item}>{item}</li>)}</ul>
      </nav>
      <img className="ium-header-cart" src={shoppingCart} alt="Shopping Cart" />
    </header>
  );
};

export default Header;
