"use client";
/*
- click button
- create function in edit.jsx (checkBooking)
- throw set state in that function
- if its true ->update button if false-> contact user
- pass date(state), starttime(state) and endtime(state) and the function (checkBooking) to this component

- go inside database or display it
- compare desired date and start time and end time to all in database
- if available pop up upgrade button]
- if not contact user



*/

  const CheckAvailableBooking = ({date, startTime, endTime, checkAvailability}) => {

  const checkExistingBooking = async () => {
    const res = await fetch('http://localhost:3002/api/bookings');
    const bookings = await res.json();
    const [Sdate, bookingStartTime] = bookings.party_start_time.split('T');
    const [_, bookingEndTime] = bookings.party_end_time.split('T');
    const bookingDate = Sdate;
    let availability;
    const isOverLap = bookings.some( b =>{
      const [sBookDate, bookingsStartTime] = b.party_start_time.split('T');
      const [eBookDate, bookingsEndTime] = b.party_end_time.split('T');
      const bookingsDate = sBookDate && eBookDate;
      if(bookingStartTime === bookingsStartTime && bookingEndTime === bookingsEndTime && bookingDate === bookingsDate ){
        availability = true;
      } else {
        availability = false
      }
      return availability
    })

};
  }

export default CheckAvailableBooking;
