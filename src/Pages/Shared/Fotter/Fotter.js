import React from "react";
import logo from "../../../asstes/img/ssis-logo.png";

const Fotter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <img className="brand-logo" src={logo} alt="Shipping Survey & Inspection Services" />
            </a>
            <p>
              Marine, cargo, and commodity surveys for shippers moving goods out of Bangladesh.
            </p>
          </div>

          <div>
            <h3>Visit</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3>Reach</h3>
            <address className="footer-address">
              H 20, Lutfunnesa Road, Priyanka City,
              <br />
              Sector 12, Uttara, Dhaka.
              <br />
              <a href="mailto:hasansit48@gmail.com">hasansit48@gmail.com</a>
              <br />
              <a href="tel:+8801950090248">+880 1950-090248</a>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} MS Shipping Survey. All rights reserved. Design by{" "}
            <a
              className="footer-credit"
              href="https://flyitgo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flyitgo
            </a>
          </span>
          <span>Sun–Thu, 9AM – 6PM</span>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
