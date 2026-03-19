export const submitRequest = async (formData) => {
  console.log('before fetch', structuredClone(formData));

  // if (formData.url === 'http://localhost:3002/api/request'){


  const res = await fetch('http://localhost:3002/api/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  console.log('after fetch', structuredClone(formData), window.location.hostname,
  window.location.hostname === 'localhost'
  ? 'http://localhost:3002'
  : 'https://big-jumps-api.onrender.com'
  );
  if (!res.ok) {
    const errorData = await res.json();
    throw errorData;
  }
// }
return res.json();

};
