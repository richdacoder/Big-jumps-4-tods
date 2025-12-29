export const submitRequest = async (formData) => {
console.log('before fetch',formData )
  const res = await fetch('http://localhost:3002/api/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  console.log('after fetch',res);
/*
objective: send email to when submit
- import resned
- create function for send email
- get email of submitter
- send them confirmation email


*/
  if (!res.ok) {
    const errorData = await res.json();
    throw errorData;
  }
return res.json();

};
