// app/layout.jsx
'use client'; // needed for interactivity

import { useState } from 'react';
import './styles/globals.css';

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="site-header">
          <div className="header-inner">
            <h1 className="logo">Big Jumps 4 Tods</h1>

            {/* Hamburger button visible on mobile */}
            <button className="hamburger" onClick={toggleMenu}>
              ☰
            </button>
          </div>

          {/* Navbar */}
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/booking">Booking</a>
            <a href="/about">About Us</a>
            <a href="/contact-us">Contact Us</a>
          </nav>
        </header>

        {/* Main content */}
        <main className="site-main">{children}</main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-inner">
            <p>© 2025 Big Jumps 4 Tods. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
