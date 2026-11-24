import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../asstes/img/ssis-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-bar">
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <img className="brand-logo" src={logo} alt="Shipping Survey & Inspection Services" />
        </a>

        <div className={`nav-panel ${open ? "open" : ""}`}>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link className="btn btn-line" to="/admin" onClick={() => setOpen(false)}>
              Admin login
            </Link>
            <a className="btn btn-gold" href="#contact" onClick={() => setOpen(false)}>
              Request a survey
            </a>
          </div>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
