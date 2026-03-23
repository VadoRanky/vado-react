import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Example from "./navbar.jsx";
import About from "./about.jsx";
import Contact from "./Contact.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Example />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
);
