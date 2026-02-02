'use client';
import '../styles/packages.css';
import PackageImages from "./extras/packages-imgs.jsx"

/*
- function for all packages
- includes an array of img urls
- turn package card into button
- change hover
- arrows to go back and forth in photos
- when click image goes large and you can scroll with arrows


*/

export default function PackagesPage() {

  const packages = [
    {
      id:"basic-package",
      image:"/images/package/basic/IMG_5820.png",
      alt:"Basic Package",
       name:"Basic Package",
       description:"All basic packages include 4 hours of fun! Extra hour: $40/hr.",
       price:"$250 / 4 hours"
    },
    {
      id:"large-white-bounce",
        image:"/images/package/big-white-playh/15727D1C-E8F3-42CF-881A-14A6116350A5.png",
        alt:"12ft White Bounce House with playhouse",
        name:"12ft White Bounce House with playhouse",
        description:"Includes playhouse",
        price:"$575"
      }
      ,
      {
      id:"small-white-bounce",
      image:"/images/package/smll-white-playh/IMG_7180.png",
      alt:"12ft White Bounce House",
      name:"6ft White Bounce House",
       description:"No playhouse",
       price:"$275"
      },
  {
    id:"pink-bounce",
    image:"/images/package/pink-house/IMG_4392.png",
    alt: "8ft Pink Bounce House with playhouse",
    name:"8ft Pink Bounce House",
    description:"Includes playhouse",
    price: "$525"
    },
    {
      id:"black-bounce",
      image:"/images/package/blk-playh/IMG_8364 2 2.png",
      alt:"10ft Black Bounce House with playhouse",
      name:"10ft Black Bounce House",
      description:"Includes playhouse",
      price:"$550"
    },
    {
      id:"chairs-tables",
      image:"/images/tables-chairs.jpg" ,
      alt:"Kids tables and chairs",
      name:"Kids tables and chairs",
      description:"10 chairs and 2 tables for the whole day",
      price:"$125"


    },
    {
      id:"ball-pit",
      image:"/images/ball-pit.jpg" ,
      alt:"Personalized ball pit",
      name:"Personalized ball pit",
      description:"10 chairs and 2 tables for the whole day",
      price:"$25"


    },
    {
      id:"Personalized-soft-blocks",
      image:"/images/tables-chairs.jpg" ,
      alt:"Personalized soft blocks",
      name:"Personalized soft blocks",
      description:"Custom soft blocks for kids",
      price:"$10"


    }


  ,
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
          </ul>
        </div>


      <div className="packages-grid">
        {
          packages.map((pkg) => (
            <div className="package-card" key={pkg.id}>
            <button className='card-button'>
            <img src={pkg.image} alt={pkg.alt} className='images'/>
            <h2 className="package-name">{pkg.name}</h2>
            <p className="package-desc">{pkg.description} </p>
            <p className="package-price">{pkg.price}</p>
            </button>
          </div>
          )
          )}





      </div>
      <PackageImages packages={packages}/>
    </div>
  );
}
