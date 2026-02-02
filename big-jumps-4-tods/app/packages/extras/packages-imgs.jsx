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


console.log('{packages', packages)



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
