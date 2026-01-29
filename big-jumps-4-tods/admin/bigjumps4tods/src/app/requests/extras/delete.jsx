"use client";

import {useState, useEffect} from "react";

export default function Delete({requests}){
const date = new Date();
const request = requests.find(req => req );
const realReq = new Date(request.party_date)
console.log('date', typeof realReq);
console.log('request', typeof date);

useEffect(() => {
  const removeData = async () => {

    if (realReq > date )
    try{
      const api = await fetch(`http://localhost:3002/api/request/${request.id}`,
      {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'}
      })
    }catch(err){
      console.error(err)
    }
  }


})

return(
  <></>
)
}
