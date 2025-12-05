// components/Layout.jsx
import { useState } from 'react';
import Head from 'next/head';

export default function Layout({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Big Jumps 4 Tods</title>
      </Head>

      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">Big Jumps 4 Tods</div>
          <button className="hamburger" onClick={() => setNavOpen(!navOpen)}>
            ☰
          </button>
          <nav className={`nav-links ${navOpen ? 'open' : ''}`}>
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
    </>
  );
}
