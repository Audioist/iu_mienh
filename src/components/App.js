import React from "react";
import Cta from "./Cta";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Header from "./Header";

import "../styles/Cta/Cta.css";

const App = () => {
  return (
    <div>
      <Header />
      <Cta />
      <About />
      <Products />
      <Contact />
    </div>
  );
};

export default App;
