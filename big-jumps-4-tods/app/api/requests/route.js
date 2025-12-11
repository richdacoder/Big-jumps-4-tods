import axios from 'axios';

// Helper: convert frontend time fields to ISO timestamp
function convertToISO(dateStr, hourStr, minuteStr, ampm) {
  if (!hourStr || !minuteStr || !ampm) return null;

  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  if (ampm === 'PM' && hour !== 12) hour += 12;
  if (ampm === 'AM' && hour === 12) hour = 0;

  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day, hour, minute);

  return date.toISOString();
}

export async function POST(req) {
  try {
    const data = await req.json();

    // Convert time fields
    const party_start_time = convertToISO(data.partyDate, data.startHour, data.startMinute, data.startAMPM);
    const party_end_time = convertToISO(data.partyDate, data.endHour, data.endMinute, data.endAMPM);

    // Validate required fields
    const missing = [];
    ['firstName','lastName','phone','email','partyAddress','package'].forEach(f => {
      if (!data[f]) missing.push(f);
    });
    if (!party_start_time || !party_end_time) missing.push('party_start_time / party_end_time');
    if (missing.length > 0) {
      return new Response(JSON.stringify({ error: `Missing required fields: ${missing.join(', ')}` }), { status: 400 });
    }

    // Prepare payload for Express backend
    const payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      email: data.email,
      party_date: data.partyDate,
      party_address: data.partyAddress,
      address_line2: data.addressLine2 || '',
      message: data.message || '',
      theme: data.theme || '',
      referral: data.referral || '',
      package: data.package,
      party_start_time,
      party_end_time
    };

    // Send to Express backend
    const res = await axios.post('http://localhost:3001/requests', payload);

    return new Response(JSON.stringify(res.data), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    const errorMsg = err.response?.data || { error: 'Request submission failed' };
    return new Response(JSON.stringify(errorMsg), {
      status: err.response?.status || 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
