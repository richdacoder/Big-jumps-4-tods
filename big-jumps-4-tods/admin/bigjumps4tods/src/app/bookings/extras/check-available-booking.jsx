"use client";

  const CheckAvailableBooking = async ({partyDate, startTime, endTime, currentBookingId }) => {

    console.log(
      {
        'date': partyDate,
        'start tiem': startTime,
        'end time': endTime,
        'currrent ID': currentBookingId
      }
    )
    const convertDate = (dateString, timeString) => {

      const [y, m, d] =  dateString.split('-').map(Number);
      const [hours, mins] = timeString.split(':').map(Number);

      console.log('before utc',  hours, mins,  'split', m, d, y);

      return new Date(y, m - 1, d , hours, mins);
    }

    const desiredStartTime = convertDate(partyDate, startTime);
    const desiredEndTime = convertDate(partyDate, endTime);

    console.log('desired', desiredStartTime, 'desired end', desiredEndTime);

    try{
    const res = await fetch('http://localhost:3002/api/bookings');
    const bookings = await res.json();

    const isOverLap = bookings.some(b => {
      if (b.id === currentBookingId) return false;
      const existingStartTime = new Date(b.party_start_time);
      const existingEndTime = new Date(b.party_end_time);

      console.log('first name:', b.first_name, 'existing start', existingStartTime, 'existing end', existingEndTime);


      return desiredStartTime < existingEndTime &&
      desiredEndTime > existingStartTime;
    });
    return isOverLap;
} catch(err) {
console.error(err);
return true;
}



  }

export default CheckAvailableBooking;
