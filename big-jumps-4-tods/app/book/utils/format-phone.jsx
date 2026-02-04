"use client";
import {useState} from "react"

export default function PhoneNumberFormatter({number}){
/*
- no none numbers allowed
- bring number in
- on change as they time ( pops up after one number
- after 3 numbers ) pops up
- on after 6 numbers - pop ups
- after 10 numbers you cant do more





*/

const numberFormatter = (value) => {

  console.log('look here', value)
  return value;

}
console.log('working phone number formatter', numberFormatter(number));
numberFormatter(number);
// const [phoneNumber, setphoneNumber] = useState(value || "");




  return;

}
