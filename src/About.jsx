import React from "react";
import value from "./assets/value.jpg";
const About = () => {
  return (
    <div>
      <section id="about"className="service-section">
        <div className="card">
          <h3>Web Developer</h3>
          <p>we build modern website</p>
        </div>
        <div className="card">
          <h3>Phone Engineering</h3>
          <p>we repair all kinds of phones</p>
        </div>
        <div className="card">
          <h3>Phones And Laptop Dealer</h3>
          <p>we sell & buy all kinds of Phones laptops</p>
        </div>
      </section>
      <section className="about-section">
        <div>
          <img src={value} alt="" />
        </div>
        <div>
          <h1>About Us</h1>
          <p>Vado technlogy is a forward thinking tech <br />company delivering cuttting-edge digital solutions.</p>
          <button>Send Message</button>
        </div>
      </section>
    </div>
  );
};

export default About;
