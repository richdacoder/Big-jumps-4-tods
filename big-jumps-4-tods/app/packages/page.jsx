'use client';
import '../styles/packages.css';

export default function PackagesPage() {
  return (
    <div className="packages-page">
      <h1 className="packages-title">Our Packages</h1>

      <div className="packages-grid">

        <div className="package-card">
          <h2 className="package-name">Basic Bounce</h2>
          <p className="package-desc">
            Perfect for smaller parties and toddlers. Includes 1 bounce house and setup.
          </p>
          <p className="package-price">$150 / 3 hours</p>
        </div>

        <div className="package-card">
          <h2 className="package-name">Deluxe Jump</h2>
          <p className="package-desc">
            Our most popular option! Includes bounce house, music speaker, and party decorations.
          </p>
          <p className="package-price">$225 / 3 hours</p>
        </div>

        <div className="package-card">
          <h2 className="package-name">Ultimate Tods Party</h2>
          <p className="package-desc">
            Everything included: bounce house, decorations, bubble machine, balls, mats, and more.
          </p>
          <p className="package-price">$350 / 4 hours</p>
        </div>

      </div>
    </div>
  );
}
