import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Web CSS
import "../../css/Archo.css";

// Styling CSS
import "../CSS/Header.css";

// Hamburger Menu
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getActiveClass = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <>
      <header>
        <div className="container navbar">
          <nav>
            <div className="nav-logo">
              <img src="/images/Archo-Logo.png" alt="Logo" />
            </div>
            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <ul>
                <Link
                  to="/"
                  className={`Link-Path ${getActiveClass("/")}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li>Home</li>
                </Link>
                <Link
                  to="/about"
                  className={`Link-Path ${getActiveClass("/about")}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li>About</li>
                </Link>
                <Link
                  to="/portfolio"
                  className={`Link-Path ${getActiveClass("/portfolio")}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li>Portfolio</li>
                </Link>
                <Link
                  to="/blog"
                  className={`Link-Path ${getActiveClass("/blog")}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li>Blog</li>
                </Link>
                <Link
                  to="/contact"
                  className={`Link-Path ${getActiveClass("/contact")}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li>Contact</li>
                </Link>
              </ul>
            </div>

            <div className="Toggle-Button" onClick={toggleMenu}>
              <GiHamburgerMenu className="Ham" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
