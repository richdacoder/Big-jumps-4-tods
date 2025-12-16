"use client";

export default function Available(){

  const createBooking = async () => {
    //fetch api
    //check for error
    //send it to back end
    console.log('create booking')
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
