import React from "react";
import About from "./about";
import Contact from "./Contact";
import { NavLink } from "react-router";
const Example = () => {
  return (
    <div>
      <nav>
        <h1>VadoTech</h1>
        <ul>
          <a href="#home">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </a>
          <a href="#service">
            <li>Service</li>
          </a>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Example;
