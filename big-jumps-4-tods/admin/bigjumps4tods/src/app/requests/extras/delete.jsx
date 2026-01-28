"use client";

import {useState} from "react";

export default function Delete({requests}){
const date = new Date();
const stringDate = date.toISOString();
const request = requests.find(req =>  req);

  const removeData = async () => {

    if (request.party_date > stringDate )
    try{
      const api = await fetch(`http://localhost:3002/api/request/${request.id}`,
      {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'}
      })
    }catch(err){
      console.err(err)
    }
  }
return(
  <></>
)
}
