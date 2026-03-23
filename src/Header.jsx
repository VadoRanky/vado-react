import React from "react";
import vado from "./assets/vado.jpg";
import hero from "./assets/hero.png";
import "./index.css";
const Heading = () => {
  return (
    <div>
      <section id="home">
        <header>
          <div>
            <h2>Innovating The Future</h2>
            <p>your trusted partner in technology solutions</p>
            <button>Get Started</button>
          </div>
          <div>
            <img src={vado} alt="" />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Heading;
