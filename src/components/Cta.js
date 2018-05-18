import React, { Component } from "react";

import "../styles/Cta/Cta.css";

export default class Cta extends Component {
  render() {
    return (
      <section id="top" className="ium-cta">
        <div>
          <img alt="Welcome to IU Mien" />
          <p>Lorem ipsum</p>
          <button>PURCHASE NOW!</button>
        </div>
        <div>
          <img alt="Welcome image" />
          <h3>Hi there!</h3>
          <p>Lorem ipsum dolor emet</p>
        </div>
        <div>Product</div>
      </section>
    );
  }
}
