<<<<<<< HEAD
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
=======
import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
    return (
        <Box sx={{ bgcolor: "#5c0837", display: "flex", alignItems: "center", justifyContent: "center", height: "50px" }}>
            <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box>
                    <Typography sx={{ color: "white" }}>lOGO HERE</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
                    <Link style={{ textDecoration: "none", color: "white", cursor: "pointer" }}><Typography>Home</Typography></Link>
                    <Link style={{ textDecoration: "none", color: "white", cursor: "pointer" }}><Typography>About Us</Typography></Link>
                    <Link style={{ textDecoration: "none", color: "white", cursor: "pointer" }}><Typography>Service</Typography></Link>
                    <Link style={{ textDecoration: "none", color: "white", cursor: "pointer" }}><Typography>Contact Us</Typography></Link>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar
>>>>>>> 046ae668174e85270d93384364173162040c96f1
