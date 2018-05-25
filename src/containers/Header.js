import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "../img/ShoppingCartIcon";
import IumLogo from "../img/ium-logo.svg";
import Hamburguer from "../components/Hamburguer";
import Nav from "../components/Nav";

import "../styles/Header/Header.css";
import "../styles/Header/Header-Logo.css";
import "../styles/Header/Header-Nav.css";
import "../styles/Header/Header-Cart.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: {
        checked: false,
        state: "off"
      },
      cart: {
        active: false,
        state: ""
      }
    };
  }

  render() {
    const { nav } = this.state;

    return (
      <header className="ium-header">
        <Hamburguer
          onChange={this.hamburguerSwitch.bind(this)}
          checked={nav.checked}
          className={`ium-header-hamburger`}
        />
        <h1 className="ium-header-logo">
          <Link to="/" onClick={this.scrollDown.bind(this, "home")}>
            <img src={IumLogo} alt="IU Mien logo" />
          </Link>
        </h1>
        <Nav
          className={`ium-header-nav`}
          onClick={this.scrollDown.bind(this)}
        />
        <Link to="/">
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

  hamburguerSwitch() {
    let navState = this.state.nav.checked;
    let stateResult = navState ? "off" : "on";

    this.setState({
      nav: {
        checked: !navState,
        state: stateResult
      }
    });
  }
}

export default Header;
