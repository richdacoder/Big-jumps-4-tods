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




*/

  const CheckAvailableBooking = async ({partyDate, startTime, endTime }) => {

    console.log(
      {
        'date': partyDate,
        'start tiem': startTime,
        'end time': endTime
      }
    )
    const toUTC = (dateString, timeString) => {
      const [y, m, d] =  dateString.split('-').map(Number);
      const [hours, mins] = timeString.split(':').map(Number);

      console.log('before utc',  hours, mins,  'split', m, d, y);

      return new Date(Date.UTC(y, m - 1, d, hours, mins))
    }

    const desiredStartTime = toUTC(partyDate, startTime);
    const desiredEndTime = toUTC(partyDate, endTime);
    console.log('desired', desiredStartTime, 'desired end', desiredEndTime);

    try{
    const res = await fetch('http://localhost:3002/api/bookings');
    const bookings = await res.json();

    const isOverLap = bookings.some(b => {
      // const desiredStartTime = new Date(Date.UTC(`${partyDate}T${ startTime}`));
      // const desiredEndTime = new Date(`${partyDate}T${endTime}`);
      const existingStartTime = new Date(b.party_start_time);
      const existingEndTime = new Date(b.party_end_time);

      // console.log('desired', {
      //   'start': desiredStartTime,
      //   'end': desiredEndTime,
      //   'date': partyDate
      // });

      // console.log('existing', {
      //   'start': existingStartTime,
      //   'end': existingEndTime,
      //   'start no date': b.party_start_time,
      //   'end no date': b.party_end_time

      // })

      // add day plus one day
      // or convert desired time to utc
      return desiredStartTime < existingEndTime &&
      desiredEndTime > existingStartTime;





    });
    isOverLap
} catch(err) {
console.error(err);
return true;
}



  }

export default CheckAvailableBooking;
