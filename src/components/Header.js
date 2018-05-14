import React from "react";
import { Link } from "react-router-dom";

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
      <h1 className="ium-header-logo">
        <Link to="/">IU Mien</Link>
      </h1>
      <nav className="ium-header-nav">
        <ul>
          {sections.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </nav>
      <div className="ium-header-cart">
        <i class="fas fa-shopping-cart" />
      </div>
    </header>
  );
};

export default Header;
