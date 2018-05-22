import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "./Header";
import Cart from "../containers/Cart";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" render={props => <Header {...props} />} />
          <Switch>
            <Route path="/about" render={props => <App {...props} />} />
            <Route path="/products" render={props => <App {...props} />} />
            <Route path="/contact" render={props => <App {...props} />} />
            <Route path="/cart" component={Cart} />
            <Route path="/" render={props => <App {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
