import React from "react";

const Contact = () => {
  return (
    <div>
      <aside id="contact" className=" contact-section">
        <div>
          <h1>Contact Us</h1>
          <p>
            Vado technlogy is a forward thinking tech <br />
            company delivering cuttting-edge digital solutions.
          </p>
        </div>
        <div>
            <form action="">
                <input type="text" placeholder="Your Name" /><br />
                <input type="email" placeholder="Your Email" /><br />
                <input type="text" placeholder="Your Message" /><br />
                <input type="submit" value="Send Message" />
            </form>
        </div>
      </aside>
      <footer>
        <div>
            <p>@ 2026 Vado Technology</p>

        </div>
      </footer>
    </div>
  );
};

export default Contact;
