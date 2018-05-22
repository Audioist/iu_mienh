import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "../img/ShoppingCartIcon";
import IumLogo from "../img/ium-logo.svg";
import HamburguerIcon from "../img/peace-love.svg";

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
    if (request !== "" || request !== "cart") {
      this.scrollDown.bind(this, request);
    }
  }

  render() {
    const sections = ["Home", "About", "Products", "Contact"];
    return (
      <header className="ium-header">
        <img
          className="ium-header-hamburger"
          src={HamburguerIcon}
          alt="IU Mien menu"
        />
        <h1 className="ium-header-logo">
          <Link to="/">
            <img src={IumLogo} alt="IU Mien logo" />
          </Link>
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
        <ShoppingCartIcon />
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
