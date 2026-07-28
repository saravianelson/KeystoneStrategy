import React, { useState } from "react";
import { AboutMe } from "../About/about";
import { Portfolio } from "../Portfolio/portfolio";
import { Skills } from "../Skills/skills";
import { Contact } from "../../shared/Contact/contact";
import { Footer } from "../../shared/Footer/footer";
import Navbar from "../../shared/Navbar/Navbar";


import './home.css'

export const Home = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMenuOpen(false); // Cerrar el menú al hacer clic en un elemento
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="home">
      {/* <div className="wrapper"> */}
        <header>
        <div className="submission">
           {/* <img src="/assets/img/portada.png" alt="" /> */}
        <Navbar />
            <div className="info-content">
            <h2>
              <span> KEYSTONE STRATEGY </span> 
            </h2>
            <br></br>
             <span className="info-content__subtitle">
              Digital Strategy & Technical Solutions
            </span>
            <br></br>
            <br></br>
            {/* <span className="info-content__subtitle2">
             We empower your business through strategic systems integration, 
             custom software development, and complex data migration.
            <br></br>
            <br></br>
            We combine precision engineering with results-driven marketing strategies.
            </span> */} 
            <p className="info-content__p"></p>
            {/* <a href="#portfolio">
              <button className="contact">My Portfolio</button>
            </a> */}
          </div>
          {/* <img src="/assets/img/desarrollo-web.jpeg" alt="" /> */}
        </div>
        </header>
      {/* </div> */}
      <Skills />
      <Portfolio />
      <AboutMe />
      <Contact />
      <Footer />
    </section>
  );
};
