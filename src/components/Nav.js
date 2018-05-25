import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  const sections = ["Home", "About", "Products", "Contact"];
  const { className = "", onClick = () => {} } = props;

  return (
    <nav className={className}>
      <ul>
        {sections.map(item => (
          <Link key={item} to="/" onClick={() => onClick(item)}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
