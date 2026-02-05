"use client";
import {useState} from "react";
import BookingPage from "../page.jsx";

export default function PhoneNumberFormatter({number}){
/*
- no none numbers allowed
- bring number in
- on change as they time ( pops up after one number
- after 3 numbers ) pops up
- on after 6 numbers - pop ups
- after 10 numbers you cant do more





*/

  if (!number) return "";

let transformation = number.replace(/\D/g, "").substring(0, 10);
if(transformation.length >= 3){transformation = transformation.replace(/^(\d{3})(\d{3})/, "($1)$2-")}
console.log('transformation look here', transformation, transformation.length);




console.log('working phone number formatter', transformation);




  return (
    <BookingPage
    formatted={transformation}
    />
    )

}
