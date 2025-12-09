'use client';
import { useState } from 'react';
import '../styles/book.css'; // updated path

export default function BookingPage() {
  const [formData, setFormData] = useState({
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
    startAMPM: '',
    endHour: '',
    endMinute: '',
    endAMPM: '',
    package: '',
    theme: '',
    referral: ''
  });

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const ampm = ['AM', 'PM'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking submitted! (No backend POST yet)');
  };

  return (
    <div className="booking-page">
      <h1>Book Your Party</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>First Name *</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Last Name *</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Phone Number *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Party Date *</label>
          <input type="date" name="partyDate" value={formData.partyDate} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Message *</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Party Address *</label>
          <input type="text" name="partyAddress" value={formData.partyAddress} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Address Line 2</label>
          <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
        </div>

        <div className="form-row party-time">
          <label>Party Start Time *</label>
          <div className="time-selects">
            <select name="startHour" value={formData.startHour} onChange={handleChange} required>
              <option value="">Hour</option>
              {hours.map(h => <option key={h} value={h}>{h}</option>)}
            </select>
            <select name="startMinute" value={formData.startMinute} onChange={handleChange} required>
              <option value="">Minute</option>
              {minutes.map(m => <option key={m} value={m < 10 ? `0${m}` : m}>{m < 10 ? `0${m}` : m}</option>)}
            </select>
            <select name="startAMPM" value={formData.startAMPM} onChange={handleChange} required>
              {ampm.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>

        <div className="form-row party-time">
          <label>Party End Time *</label>
          <div className="time-selects">
            <select name="endHour" value={formData.endHour} onChange={handleChange} required>
              <option value="">Hour</option>
              {hours.map(h => <option key={h} value={h}>{h}</option>)}
            </select>
            <select name="endMinute" value={formData.endMinute} onChange={handleChange} required>
              <option value="">Minute</option>
              {minutes.map(m => <option key={m} value={m < 10 ? `0${m}` : m}>{m < 10 ? `0${m}` : m}</option>)}
            </select>
            <select name="endAMPM" value={formData.endAMPM} onChange={handleChange} required>
              {ampm.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>

        <div className="form-row">
          <label>Package You’re Interested In</label>
          <input type="text" name="package" value={formData.package} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label>Party Theme</label>
          <input type="text" name="theme" value={formData.theme} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label>How Did You Hear About Us?</label>
          <input type="text" name="referral" value={formData.referral} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  );
}
