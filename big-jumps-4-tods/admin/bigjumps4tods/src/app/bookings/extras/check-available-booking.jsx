"use client";
/*
- click button***
- create function in edit.jsx (checkBooking) ****
- throw set state in that function*****
- if its true ->update button if false-> render not available contact user
- pass date(state), starttime(state) and endtime(state) and the function (checkBooking) to this component

- go inside database or display it
- change time format
- compare desired date and start time and end time to all in database
- if available pop up upgrade button]
- if not contact user

 56 | gosto      | papa      | 92903940393   | richardwilliams5697@yahoo.com  | 2026-02-12 | yse      | 33 yo ave     |               | 2026-02-12 14:19:00-05 | 2026-02-12 20:21:00-05 | how                           |         |          | 2026-01-27 17:20:39.721203-05 | 2026-01-27 17:20:39.721203-05


*/

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
