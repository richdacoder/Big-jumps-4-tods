"use client";
import "./styles/globals.css";
import { useState } from "react";

export default function Layout({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title> Big Jumps 4 Tods Admin</title>
      </head>
      <body>
        {/* Header */}
        <header className="site-header">
          <div className="header-inner">
            <div className="logo"><a href="/">Big Jumps 4 Tods Admin</a></div>
            <button className="hamburger" onClick={() => setNavOpen(!navOpen)}>
              ☰
            </button>
            <nav className={`nav-links ${navOpen ? "open" : ""}`}>
              <a href="/requests">Requests</a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="site-main">{children}</main>

        {/* Footer */}
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Big Jumps 4 Tods. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
