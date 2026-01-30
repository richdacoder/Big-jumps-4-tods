"use client";
import "../styles/packages.css";

export default function PackagesPage() {
  return (
    <div className="packages-page">
      <h1 className="packages-title">Our Packages</h1>

      <div className="packages-grid">

        {/* Basic Package */}
        <div className="package-card">
          <img src="/images/basic-package.jpg" alt="Basic party package" className="package-img" />
          <h2 className="package-name">Basic Package</h2>
          <p className="package-desc">
            All basic packages include 4 hours of fun! Extra hour: $40/hr.
          </p>
          <p className="package-price">$250 / 4 hours</p>
        </div>

        {/* Bounce Houses */}
        <div className="package-card">
          <img src="/images/bounce-white-12.jpg" alt="12ft white bounce house" className="package-img" />
          <h2 className="package-name">12ft White Bounce House</h2>
          <p className="package-desc">Includes playhouse</p>
          <p className="package-price">$575</p>
        </div>

        <div className="package-card">
          <img src="/images/bounce-black-10.jpg" alt="10ft black bounce house" className="package-img" />
          <h2 className="package-name">10ft Black Bounce House</h2>
          <p className="package-desc">Includes playhouse</p>
          <p className="package-price">$550</p>
        </div>

        <div className="package-card">
          <img src="/images/bounce-pink-8.jpg" alt="8ft pink bounce house" className="package-img" />
          <h2 className="package-name">8ft Pink Bounce House</h2>
          <p className="package-desc">Includes playhouse</p>
          <p className="package-price">$525</p>
        </div>

        <div className="package-card">
          <img src="/images/bounce-toddler-6.jpg" alt="Toddler bounce house" className="package-img" />
          <h2 className="package-name">6ft Little Toddler Bounce House</h2>
          <p className="package-desc">Includes playhouse</p>
          <p className="package-price">$475</p>
        </div>

        {/* Tables & Chairs */}
        <div className="package-card">
          <img src="/images/tables-chairs.jpg" alt="Kids tables and chairs" className="package-img" />
          <h2 className="package-name">Kids Tables & Chairs</h2>
          <p className="package-desc">10 chairs and 2 tables for the whole day</p>
          <p className="package-price">$125</p>
        </div>

        {/* Extras */}
        <div className="package-card">
          <img src="/images/ball-pit.jpg" alt="Personalized ball pit" className="package-img" />
          <h2 className="package-name">Personalize Ball Pit</h2>
          <p className="package-desc">Custom ball pit for your event</p>
          <p className="package-price">$25</p>
        </div>

        <div className="package-card">
          <img src="/images/soft-blocks.jpg" alt="Soft play blocks" className="package-img" />
          <h2 className="package-name">Personalize Soft Blocks</h2>
          <p className="package-desc">Custom soft blocks for kids</p>
          <p className="package-price">$10</p>
        </div>

      </div>
    </div>
  );
}
