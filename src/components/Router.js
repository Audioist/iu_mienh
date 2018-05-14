import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" render={props => <Header {...props} />} />
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
