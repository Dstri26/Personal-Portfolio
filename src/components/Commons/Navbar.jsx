import React, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-xs navbar-light bg-transparent fixed-top">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="logo_light.png"
            alt="Your Logo"
            height={48}
            width={"auto"}
            className="logo"
          />
        </a>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarDrawer"
          aria-controls="navbarDrawer"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Drawer Menu */}
        <div className="offcanvas offcanvas-end" id="navbarDrawer">
          <div className="offcanvas-header">
            {/* Close Button */}
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex justify-content-center align-items-center text-center">
            {/* Navigation Links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#section-home">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-about">
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-skills">
                  WORK PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-experience">
                  EXPERIENCE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-achievements">
                  ACHIEVEMENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-contact">
                  CONTACT ME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
