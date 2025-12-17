"use client";

export default function Available(bookingData){
//get request body
//get avaible funstion into pop up page
//get request body into booking data
  const createBooking = async () => {
    const res = await fetch('http://localhost:3002/api/booking', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(bookingData),
});
console.log(res.body);
if (!res.ok) {
  throw new Error(`HTTP error! status: ${res.status}`);

}
return res.json();
  }

  const deleteRequest = async () => {
    //fetch api
    //check for error
    //send it to backend
    console.log('delete request')

  }
//post

return (
  <div className="container" >
    <div>
  <div> Date is available would you like to add to schedule?  </div>
  <button className="add-schedule-btn" onClick={() => {createBooking(); deleteRequest();} }>
    Add To Schedule
  </button>
  </div>
  </div>
)

}
