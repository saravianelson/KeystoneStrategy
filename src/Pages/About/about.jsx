import React from "react";
import './about.css'


export function AboutMe() {
  return (
    <section id="aboutme" className="about">
      {/* <img src="/assets/img/nsaravia.png" alt="" /> */}
      <div className="about-info">
        <h2>About us</h2>
        <br />
        <br />
        {/* <div className="divider"></div> */}
        <p>
         Who We Are
        </p>
        <p>
          At Keystone Strategy, we believe that sustainable business growth sits at the intersection 
          of rigorous data, robust engineering, and strategic marketing. We are not a massive, impersonal agency; 
          we are a specialized consultancy built by entrepreneurs who understand the real-world complexities
          of running and scaling a business.
        </p>
        <p>
          Our Approach
        </p>
        <p>
          We combine technical precision with results-driven execution. 
          By merging advanced data science, custom software development,
          and seamless systems integration with targeted marketing strategies,
          we help companies eliminate operational friction and unlock predictable revenue.
        </p>
        <p>
          Just like a architectural keystone holds an entire structure together,
          our mission is to become the core support system that bridges your technical
          infrastructure with your commercial goals.
        </p>
        <a
          href="https://drive.google.com/file/d/196yBNE5RTge0Dd6Eud-i5KYpjmSjKHi8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br />
          <button className="contact">Contact us</button>
        </a>
      </div>
    </section>
  );
};
