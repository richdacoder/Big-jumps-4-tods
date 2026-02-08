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

  const CheckAvailableBooking = async ({date, startTime, endTime }) => {

    // console.log(
    //   {
    //     'date': date,
    //     'start tiem': startTime,
    //     'end time': endTime
    //   }
    // )
    try{
    const res = await fetch('http://localhost:3002/api/bookings');
    const bookings = await res.json();

    const isOverLap = bookings.some(b => {
      const desiredStartTime = new Date(`${date}T${ startTime}`);
      const desiredEndTime = new Date(`${date}T${endTime}`);
      const existingStartTime = new Date(b.party_start_time);
      const existingEndTime = new Date(b.party_end_time);

      // console.log('desired', {
      //   'start': desiredStartTime,
      //   'end': desiredEndTime

      // });

      // console.log('existing', {
      //   'start': existingStartTime,
      //   'end': existingEndTime
      // })

      return desiredStartTime < existingEndTime &&
      desiredEndTime > existingStartTime;





    });

} catch(err) {
console.error(err);
return true;
}



  }

export default CheckAvailableBooking;
