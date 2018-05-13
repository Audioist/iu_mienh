import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
