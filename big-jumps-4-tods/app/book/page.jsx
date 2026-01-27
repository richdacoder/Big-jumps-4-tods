'use client';
import { useState } from 'react';
import '../styles/book.css';
import { submitRequest } from './utils/submitRequest';
import { useRouter } from 'next/navigation';
export default function BookingPage() {
  const initialState = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    message: '',
    party_address: '',
    address_line2: '',
    party_date: '',
    party_start_time: '',
    party_end_time: '',
    package: '',
    theme: '',
    referral: ''
  };

  const formatTimestamp = (dateString, timestring) => {
    console.log('datestring and timestring formatimestmat', dateString)
   const date = new Date(dateString);
   console.log('date formatimestmap', timestring)
   const [ hour, minutes ] = timestring.split(':');
   console.log('hour mintutes formatimestmap', hour, minutes)
   date.setHours(parseInt(hour, 10));
   date.setMinutes(parseInt(minutes, 10));
   date.setSeconds(0);
   date.setMilliseconds(0);
   console.log('TIMESTAMP', date);
    return date.toISOString();
  }

  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState(initialState);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const ampm = ['AM', 'PM'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };


  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const startTimeStamp = formatTimestamp(formData. party_date, formData.party_start_time);
    const endTimeStamp = formatTimestamp(formData. party_date, formData.party_end_time);

    try {
    const data = await submitRequest({...formData,
      party_start_time: startTimeStamp,
      party_end_time: endTimeStamp,
  });
      console.log('Booking submitted:', data);
      console.log(router);
      alert('Booking submitted successfully!');
      setFormData(initialState);
      router.push(`/confirmation/${data.id}`);
    } catch (err) {
      console.error(err);
      alert(err.error || 'Submission failed');
    }
  };

  return (
    <div className="booking-page">
      <h1>Book Your Party</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        {/* First Name / Last Name / Phone / Email */}
        {['first_name','last_name','phone','email'].map((field, i) => (
          <div className="form-row" key={i}>
            <label>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} *</label>
            <input
              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* Party Date */}
        <div className="form-row">
          <label>Party Date *</label>
          <input min={today} type="date" name="party_date" value={formData.party_date} onChange={handleChange} required />
        </div>

        {/* Message */}
        <div className="form-row">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>

        {/* Addresses */}
        <div className="form-row">
          <label>Party Address *</label>
          <input type="text" name="party_address" value={formData.party_address} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Address Line 2</label>
          <input type="text" name="address_line2" value={formData.address_line2} onChange={handleChange} />
        </div>

        {/* Start Time */}
<div className="form-row party-time">
  <label>Party Start Time *</label>
  <input
    type="time"
    name="party_start_time"
    value={formData.party_start_time}
    onChange={handleChange}
    required
  />
</div>

{/* End Time */}
<div className="form-row party-time">
  <label>Party End Time *</label>
  <input
    type="time"
    name="party_end_time"
    min={formData.party_start_time}
    value={formData.party_end_time}
    onChange={handleChange}
    required
  />
</div>


        {/* Package, Theme, Referral */}
        {['package','theme','referral'].map((field, i) => (
          <div className="form-row" key={i}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)} *</label>
            <input type="text" name={field} value={formData[field]} onChange={handleChange} required={field === 'package'} />
          </div>
        ))}

        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  );
}
