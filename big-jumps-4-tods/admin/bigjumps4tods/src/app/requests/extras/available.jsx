"use client";

export default function Available({request,onClose, onDelete}){
  const createBooking = async () => {
    const res = await fetch('http://localhost:3002/api/booking', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(request),
});
console.log('aqui', res.body, request);
if (!res.ok) {
  throw new Error(`HTTP error! status: ${res.status}`);
}
    const data = await res.json()
    onClose()
return data;
  }

  const deleteRequest = async () => {
    const res = await fetch(`http://localhost:3002/api/request/${request.id}`,{
      method:'DELETE'
    })
   alert('Booked schedule');
   onDelete(request.id);
  }

return (
  <div className="container" >
    <div>
  <div> Date is available would you like to add to schedule?  </div>
  <button className="add-schedule-btn" onClick={async () =>{
    try {
      await createBooking();
      await deleteRequest();
     } catch (err){
      alert('Booking Error');
     }  }}>
    Add To Schedule
  </button>
  </div>
  </div>
)

}
