"use client"
import {useState} from "react";
/*
- click package card ***
* other page onClick set state to true****
* state && render this page***
- page pop up in mid screen
* with css
- scroll arrows
* creat array of object
* in each object contains url for each package
* create iterate to output packages images
* each object will contain package name(id), necesities for attributes and urls
* now when iterating src and alt attributes are being replaced
- x button
* onclose
* use state
- able to zoom in






*/
 export default function PackageImages({packages, onClose}){


const packageInfo = packages.map((p) => (
  p
)
)



const images = [
{
id:'basic',
image1:'IMG_6490.png',
image2:'IMG_5820.png'
}
,
{
  id:'big white with playhouse',
  image1:'bigwhite1',
  image:'15727D1C-E8F3-42CF-881A-14A6116350A5.png'
  }
  ,
  {
    id:'small white with playhouse',
    image1:'IMG_7180.png'
    }
    ,
    {
      id:'black with playhouse',
      image1:'IMG_8364 2 2.png'
      }
      ,
      {
        id:'pink',
        image1:'IMG_4392.png'
        }
        ,

]

console.log('{packages', images)




  return(
    <>
    <button onClick={onClose}>x</button>
    <div className="image-card">
      <button>←</button>
    <div>Pop up</div>
    <button>→</button>

    </div>
    </>
  )
 }
