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

  const CheckAvailableBooking = async ({partyDate, startTime, endTime }) => {

    console.log(
      {
        'date': partyDate,
        'start tiem': startTime,
        'end time': endTime
      }
    )
    const toUTC = (dateString, timeString) => {

      // const newDate = new Date(`${dateString}T${timeString}`);
      // console.log('new date', newDate )
      // const [date, time] = newDate.toISOString().split('T');
      // console.log('date time construct', date, time);
      const [y, m, d] =  dateString.split('-').map(Number);
      const [hours, mins] = timeString.split(':').map(Number);

      console.log('before utc',  hours, mins,  'split', m, d, y);

      return new Date(Date.UTC(y, m - 1, d , hours, mins));
    }

    const fakeDate = '2026-2-10';
    const fakeStartTime = '13:00';
    const fakeEndTime = '15:04';
    const testSTime =  toUTC(fakeDate, fakeStartTime );
    const testETime =  toUTC(fakeDate, fakeEndTime );


    const desiredStartTime = toUTC(partyDate, startTime);
    const desiredEndTime = toUTC(partyDate, endTime);
    console.log(
      Intl.DateTimeFormat().resolvedOptions()
    );

    console.log('desired get utc', desiredStartTime, 'desired end', desiredEndTime);

    try{
    const res = await fetch('http://localhost:3002/api/bookings');
    const bookings = await res.json();

    const isOverLap = bookings.some(b => {
      const existingStartTime = b.party_start_time;
      const existingEndTime = b.party_end_time;
      console.log(
        Intl.DateTimeFormat().resolvedOptions()
      );

      console.log('first name:', b.first_name, 'existing start', existingStartTime, 'existing end', existingEndTime);


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
