import React from "react";

import "../styles/Header/Header.css";
import "../styles/Header/Header-Logo.css";
import "../styles/Header/Header-Nav.css";
import "../styles/Header/Header-Cart.css";

const Header = () => {
  return (
    <header className="ium-header">
      <h1 className="ium-header-logo">
        <a href="/">IU Mien</a>
      </h1>
      <nav className="ium-header-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="ium-header-cart">x</div>
    </header>
  );
};

export default Header;
