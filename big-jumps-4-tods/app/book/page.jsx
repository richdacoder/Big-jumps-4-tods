'use client';
import { useState } from 'react';
import '../styles/book.css';
import { submitRequest } from './utils/submitRequest';

export default function BookingPage() {
  const initialState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    partyAddress: '',
    addressLine2: '',
    partyDate: '',
    startHour: '',
    startMinute: '',
    startAMPM: 'AM',
    endHour: '',
    endMinute: '',
    endAMPM: 'AM',
    package: '',
    theme: '',
    referral: ''
  };

  const [formData, setFormData] = useState(initialState);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const ampm = ['AM', 'PM'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await submitRequest(formData);
      console.log('Booking submitted:', data);
      alert('Booking submitted successfully!');
      setFormData(initialState);
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
        {['firstName','lastName','phone','email'].map((field, i) => (
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
          <input type="date" name="partyDate" value={formData.partyDate} onChange={handleChange} required />
        </div>

        {/* Message */}
        <div className="form-row">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>

        {/* Addresses */}
        <div className="form-row">
          <label>Party Address *</label>
          <input type="text" name="partyAddress" value={formData.partyAddress} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Address Line 2</label>
          <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
        </div>

        {/* Start / End Times */}
        {['Start','End'].map((type, i) => (
          <div className="form-row party-time" key={i}>
            <label>Party {type} Time *</label>
            <div className="time-selects">
              <select name={`${type.toLowerCase()}Hour`} value={formData[`${type.toLowerCase()}Hour`]} onChange={handleChange} required>
                <option value="">Hour</option>
                {hours.map(h => <option key={h} value={h}>{h}</option>)}
              </select>
              <select name={`${type.toLowerCase()}Minute`} value={formData[`${type.toLowerCase()}Minute`]} onChange={handleChange} required>
                <option value="">Minute</option>
                {minutes.map(m => <option key={m} value={m < 10 ? `0${m}` : m}>{m < 10 ? `0${m}` : m}</option>)}
              </select>
              <select name={`${type.toLowerCase()}AMPM`} value={formData[`${type.toLowerCase()}AMPM`]} onChange={handleChange} required>
                {ampm.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
          </div>
        ))}

        {/* Package, Theme, Referral */}
        {['package','theme','referral'].map((field, i) => (
          <div className="form-row" key={i}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)} *</label>
            <input type="text" name={field} value={formData[field]} onChange={handleChange} />
          </div>
        ))}

        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  );
}
