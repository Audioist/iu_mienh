import React from "react";
import Cta from "./Cta";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";

import "../styles/Cta/Cta.css";

const App = () => {
  return (
    <div>
      <Cta />
      <About />
      <Products />
      <Contact />
    </div>
  );
};

export default App;
