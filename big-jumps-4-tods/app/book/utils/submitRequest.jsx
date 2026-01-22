export const submitRequest = async (formData) => {
  console.log('before fetch', structuredClone(formData));

  const res = await fetch('http://localhost:3002/api/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  console.log('after fetch', structuredClone(formData));
  if (!res.ok) {
    const errorData = await res.json();
    throw errorData;
  }
return res.json();

};
