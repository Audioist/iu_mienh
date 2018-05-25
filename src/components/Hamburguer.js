import React, { Component } from "react";
import Nav from "./Nav";
import "../styles/Header/Nav.css";

export default class Hamburger extends Component {
  render() {
    const { onChange = () => {}, checked = "" } = this.props;

    return (
      <div id="main-navigation">
        <input
          type="checkbox"
          onChange={() => onChange()}
          checked={checked}
          id="hamburger"
        />
        <label className="menuicon" htmlFor="hamburger">
          <span />
        </label>
        <div className="menu">
          <Nav />
        </div>
      </div>
    );
  }
}
