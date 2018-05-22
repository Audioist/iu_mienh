import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "../img/ShoppingCartIcon";
import IumLogo from "../img/ium-logo.svg";
import HamburguerIcon from "../img/HamburgerIcon";

import "../styles/Header/Header.css";
import "../styles/Header/Header-Logo.css";
import "../styles/Header/Header-Nav.css";
import "../styles/Header/Header-Cart.css";

class Header extends Component {
  componentDidMount() {
    let url = window.location.href;
    let arr = url.split("/");
    let request = arr[arr.length - 1];
    console.log("Need to update Header/ComponentDidMount");
    if (request !== "") {
      this.scrollDown.bind(this, request);
    }
  }

  render() {
    const sections = ["Home", "About", "Products", "Contact"];
    
    return (
      <header className="ium-header">
        <HamburguerIcon className="ium-header-hamburger" />
        <h1 className="ium-header-logo">
          <Link to="/" onClick={this.scrollDown.bind(this, "home")}>
            <img src={IumLogo} alt="IU Mien logo" />
          </Link>
        </h1>
        <nav className="ium-header-nav">
          <ul>
            {sections.map(item => (
              <Link key={item} to="/" onClick={this.scrollDown.bind(this, item)}>
                <li>{item}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <ShoppingCartIcon className="ium-header-cart"/>
      </header>
    );
  }

  scrollDown(section, history) {
    let push = section.toLowerCase();
    if(push === "home") { push = "top" }

    document.getElementById(push).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });      
  }
}

export default Header;
