export const submitRequest = async (formData) => {
  const res = await fetch('http://localhost:3001/api/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw errorData;
  }
return res.json();

};
