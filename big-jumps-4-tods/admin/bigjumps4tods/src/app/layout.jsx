"use client";
import "./styles/globals.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


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
          <Link href="/" className="logo">
              <Image
                src="/images/IMG_0442_2-removebg-preview.png"
                alt="Big Jumps 4 Tods Logo"
                width={200}
                height={200}
              />
            </Link>
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
