'use client';
import '../styles/packages.css';
import PackageImages from "./extras/packages-imgs.jsx";
import { useState } from "react";


export default function PackagesPage() {

  const [selectedPackage, setSelectedPackage] = useState(null);


  const basic = "/images/package/basic";
  const lrgWhite = "/images/package/big-white-playh";
  const smllwhite = "/images/package/smll-white-playh";
  const pinkHouse = "/images/package/pink-house";
  const blackHouse = "/images/package/blk-playh";

  const packages = [
    {
      id:"basic-package",
      image:[
      `${basic}/IMG_5820.png`,
      `${basic}/IMG_6490.png`],
      alt:"Basic Package",
       name:"Basic Package",
       description:"Includes ball pit, climber,",
       price:"$250 / 4 hours"
    },
    {
      id:"large-white-bounce",
        image:[
        `${lrgWhite}/15727D1C-E8F3-42CF-881A-14A6116350A5.png`,
        `${lrgWhite}/bigwhite1.png`,
        `${lrgWhite}/bigwhite2.png`],
        alt:"12ft White Bounce House with playhouse",
        name:"12ft White Bounce House with playhouse",
        description:"Includes playhouse",
        price:"$575"
      }
      ,
      {
      id:"small-white-bounce",
      image:[
      `${smllwhite}/IMG_7180.png`,
      `${smllwhite}/smallwhite2.png`,
      `${smllwhite}/smallwhite3.png`,
      `${smllwhite}/smallwhite4.png`,
      `${smllwhite}/smallwhite11.png`],
      alt:"12ft White Bounce House",
      name:"6ft White Bounce House",
       description:"No playhouse",
       price:"$275"
      },
  {
    id:"pink-bounce",
    image:[
    `${pinkHouse}/IMG_4392.png`,
    `${pinkHouse}/pink1.png`,
    `${pinkHouse}/pink2.png`],
    alt: "8ft Pink Bounce House with playhouse",
    name:"8ft Pink Bounce House",
    description:"Includes playhouse",
    price: "$525"
    },
    {
      id:"black-bounce",
      image:[
        `${blackHouse}/IMG_8364 2 2.png`,
       `${blackHouse}/black1.png`,
       `${blackHouse}/black2.png`,
       `${blackHouse}/black3.png`],
      alt:"10ft Black Bounce House with playhouse",
      name:"10ft Black Bounce House",
      description:"Includes playhouse",
      price:"$550"
    },
  ]

  return (
    <div className="packages-page">
      <h1 className="packages-title">Our Packages</h1>
                      {/* Notes */}
                      <div className="package-card important-notes">
          <h2 className="package-name">Important Notes</h2>
          <ul className="package-notes">
            <li>Non-refundable deposit: $75</li>
            <li>Outdoor setups: If it rains, reschedule or get half deposit back</li>
            <li>All Toddler Playhouse packages include 4 hours of playtime.
              Additional time beyond the initial 4 hours is available for $40 per extra hour.</li>
              <li>10 chairs and 2 tables for the whole day for $125</li>
              <li>Personalized ball pit for $25</li>
              <li> Custom soft blocks for kids for $10</li>
              <li> After 4 hours extra hours: $40/hr.</li>
          </ul>
        </div>


      <div className="packages-grid">
        {
          packages.map((pkg) => (

            <div className="package-card" key={pkg.id}>
            <button className='card-button' onClick={() => setSelectedPackage(pkg)}>

            <img src={pkg.image[0]} alt={pkg.alt} className='images'/>
            <h2 className="package-name">{pkg.name}</h2>
            <p className="package-desc">{pkg.description} </p>
            <p className="package-price">{pkg.price}</p>
            </button>
          </div>
          )
          )}





      </div>
      {selectedPackage && (
  <PackageImages
    pkg={selectedPackage}
    onClose={() => setSelectedPackage(null)}
  />
)}    </div>
  );
}
