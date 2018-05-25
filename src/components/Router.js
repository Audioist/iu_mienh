import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "../containers/Header";
import Cart from "./Cart";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" render={props => <Header {...props} />} />
          <Switch>
            <Route path="/cart" render={props => <Cart {...props} />} />
            <Route path="/" render={props => <App {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
