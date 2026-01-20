'use client';
import '../styles/packages.css';

export default function PackagesPage() {
  return (
    <div className="packages-page">
      <h1 className="packages-title">Our Packages</h1>

      <div className="packages-grid">

        {/* Basic Package */}
        <div className="package-card">
          <h2 className="package-name">Basic Package</h2>
          <p className="package-desc">
            All basic packages include 4 hours of fun! Extra hour: $40/hr.
          </p>
          <p className="package-price">$250 / 4 hours</p>
        </div>

        {/* Bounce Houses */}
        <div className="package-card">
          <h2 className="package-name">12ft White Bounce House</h2>
          <p className="package-desc">Includes playhouse</p>
          <p className="package-price">$575</p>
        </div>

        <div className="package-card">
          <h2 className="package-name">10ft Black Bounce House</h2>
          <p className="package-desc">Includes playhouse</p>
          <p className="package-price">$550</p>
        </div>

        <div className="package-card">
          <h2 className="package-name">8ft Pink Bounce House</h2>
          <p className="package-desc">Includes playhouse</p>
          <p className="package-price">$525</p>
        </div>

        <div className="package-card">
          <h2 className="package-name">6ft Little Toddler Bounce House</h2>
          <p className="package-desc">Includes playhouse</p>
          <p className="package-price">$475</p>
        </div>

        <div className="package-card">
          <h2 className="package-name">12ft White Bounce House</h2>
          <p className="package-desc">No playhouse</p>
          <p className="package-price">$275</p>
        </div>

        <div className="package-card">
          <h2 className="package-name">10ft Black Bounce House</h2>
          <p className="package-desc">No playhouse</p>
          <p className="package-price">$225</p>
        </div>

        <div className="package-card">
          <h2 className="package-name">8ft Pink Bounce House</h2>
          <p className="package-desc">No playhouse</p>
          <p className="package-price">$200</p>
        </div>

        <div className="package-card">
          <h2 className="package-name">6ft Small Toddler Bounce House</h2>
          <p className="package-desc">No playhouse</p>
          <p className="package-price">$150</p>
        </div>

        {/* Tables & Chairs */}
        <div className="package-card">
          <h2 className="package-name">Kids Tables & Chairs</h2>
          <p className="package-desc">10 chairs and 2 tables for the whole day</p>
          <p className="package-price">$125</p>
        </div>

        {/* Extras */}
        <div className="package-card">
          <h2 className="package-name">Personalize Ball Pit</h2>
          <p className="package-desc">Custom ball pit for your event</p>
          <p className="package-price">$25</p>
        </div>

        <div className="package-card">
          <h2 className="package-name">Personalize Soft Blocks</h2>
          <p className="package-desc">Custom soft blocks for kids</p>
          <p className="package-price">$10</p>
        </div>

        {/* Notes */}
        <div className="package-card">
          <h2 className="package-name">Important Notes</h2>
          <ul className="package-notes">
            <li>Non-refundable deposit: $75</li>
            <li>Outdoor setups: If it rains, reschedule or get half deposit back</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
