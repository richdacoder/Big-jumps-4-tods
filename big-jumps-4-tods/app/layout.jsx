// app/layout.jsx
'use client'; // needed for interactivity

import { useState } from 'react';
import './styles/globals.css';
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="site-header">
          <div className="header-inner">
          <Link href="/" className="logo">
              <Image
                src="/images/IMG_0442_2-removebg-preview.png"
                alt="Big Jumps 4 Tods Logo"
                width={200}
                height={200}
              />
            </Link>
            {/* <h1 className="logo"><a href="/">Big Jumps 4 Tods</a></h1> */}
            <h2><a className="hide" href="/packages" > Packages </a></h2>

            {/* Hamburger button visible on mobile */}
            <button className="hamburger" onClick={toggleMenu}>
              ☰
            </button>
          </div>

          {/* Navbar */}
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/book">Booking</a>
            <a className="hide" href="/packages">Packages</a>
            <a href="/about-us">About Us</a>
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
